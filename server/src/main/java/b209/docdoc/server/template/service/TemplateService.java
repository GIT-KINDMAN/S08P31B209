package b209.docdoc.server.template.service;

import b209.docdoc.server.email.service.EmailService;
import b209.docdoc.server.entity.Member;
import b209.docdoc.server.entity.Template;
import b209.docdoc.server.entity.Templatefile;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.MemberNotFoundException;
import b209.docdoc.server.exception.SaveFileException;
import b209.docdoc.server.repository.MemberRepository;
import b209.docdoc.server.repository.TemplateFileRepository;
import b209.docdoc.server.repository.TemplateRepository;
import b209.docdoc.server.repository.TemplateWidgetRepository;
import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.template.dto.Response.TemplateNameResDTO;
import b209.docdoc.server.template.service.Impl.TemplateServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class TemplateService implements TemplateServiceImpl {
    private static final String METHOD_NAME = TemplateService.class.getName();
    private final TemplateRepository templateRepository;

    private final TemplateWidgetRepository templateWidgetRepository;

    private final TemplateFileRepository templateFileRepository;

    private final MemberRepository memberRepository;

    private final EmailService emailService;


    @Value("${file.upload-dir}") // application.properties에 설정된 파일 업로드 디렉터리 경로
    private String uploadDir;

    public List<String> getAllName(String memberEmail) {
        return templateRepository.findTemplateNamesByMemberEmail(memberEmail);
    }

    @Transactional
    public Object saveTemplate(DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO, String memberEmail) {
        MultipartFile pdfFile = documentTemplateSaveReqDTO.getTemplate_file();
        Member member = memberRepository.findByMemberEmail(memberEmail).orElseThrow(() -> new MemberNotFoundException(ErrorCode.MEMBER_NOT_FOUND));
        String fileName = StringUtils.cleanPath(pdfFile.getOriginalFilename());

        try {
            File memberDir = new File(uploadDir + "/" + memberEmail);
            if (!memberDir.exists()) {
                memberDir.mkdirs();
            }

            File file = new File(memberDir.getPath() + "/" + fileName);
            pdfFile.transferTo(file);
        } catch (IOException e) {
            throw new SaveFileException(ErrorCode.MEMBER_NOT_FOUND);
        }

        String fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
        String templateType;
        switch (fileExtension) {
            case "pdf":
                templateType = "PDF";
                break;
            case "doc":
            case "docx":
                templateType = "WORD";
                break;
            case "xls":
            case "xlsx":
                templateType = "EXCEL";
                break;
            default:
                templateType = "UNKNOWN";
        }

        //TemplateFile 저장
        Templatefile templatefile = Templatefile.builder()
                .templatefileOriginalName(fileName)
                .templatefileSavedName(memberEmail + "/" + fileName)
                .build();
        templateFileRepository.save(templatefile);

        // Template 저장
        Template template = Template.builder().member(member)
                .templatefileIdx(templatefile)
                .templateUuid("123456789qeqw65ew4eq6w5eqw4") //UUID Generator 만들어야 할듯
                .templateType(templateType)
                .templateName(documentTemplateSaveReqDTO.getTemplate_name())
                .templateIsFavorite(false)
                .templateIsCompleted(false)
                .templateIsDeleted(false)
                .templateDeadline(documentTemplateSaveReqDTO.getTemplate_deadline())
                .templateToName(documentTemplateSaveReqDTO.getTo_name())
                .templateToEmail(documentTemplateSaveReqDTO.getTo_email())
                .templateFromName(member.getMemberName())
                .templateFromEmail(memberEmail)
                .build();
        templateRepository.save(template);


        String to = "receiver@example.com";
        String subject = "템플릿 저장 완료";
        String text = "템플릿 저장이 완료되었습니다.";
        emailService.sendEmail(to, subject, text);
        return null;
    }
}
