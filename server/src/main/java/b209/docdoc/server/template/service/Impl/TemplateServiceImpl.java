package b209.docdoc.server.template.service.Impl;

import b209.docdoc.server.config.utils.UUIDGenerator;
import b209.docdoc.server.email.service.EmailService;
import b209.docdoc.server.entity.Member;
import b209.docdoc.server.entity.Template;
import b209.docdoc.server.entity.TemplateWidget;
import b209.docdoc.server.entity.Templatefile;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.MemberNotFoundException;
import b209.docdoc.server.exception.SaveFileException;
import b209.docdoc.server.repository.MemberRepository;
import b209.docdoc.server.repository.TemplateFileRepository;
import b209.docdoc.server.repository.TemplateRepository;
import b209.docdoc.server.repository.TemplateWidgetRepository;
import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.template.dto.Request.TemplateWidgetDTO;
import b209.docdoc.server.template.service.TemplateService;
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
public class TemplateServiceImpl implements TemplateService {
    private static final String METHOD_NAME = TemplateServiceImpl.class.getName();
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
        MultipartFile pdfFile = documentTemplateSaveReqDTO.getTemplateFile();
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

        String uuid = UUIDGenerator.generateUUID();
        // Template 저장
        Template template = Template.builder().member(member)
                .templatefileIdx(templatefile)
                .templateUuid(uuid) // 임시 random uuid generator
                .templateType(templateType)
                .templateName(documentTemplateSaveReqDTO.getTemplateName())
                .templateIsFavorite(false)
                .templateIsCompleted(false)
                .templateIsDeleted(false)
                .templateDeadline(documentTemplateSaveReqDTO.getTemplateDeadline())
                .templateToName(documentTemplateSaveReqDTO.getToName())
                .templateToEmail(documentTemplateSaveReqDTO.getToEmail())
                .templateFromName(member.getMemberName())
                .templateFromEmail(memberEmail)
                .build();
        templateRepository.save(template);

        List<TemplateWidgetDTO>	templateWidget =  documentTemplateSaveReqDTO.getTemplateWidget();

        //TemplateWidget 저장
        for (TemplateWidgetDTO widget : templateWidget) {
            TemplateWidget tempWidget = TemplateWidget.builder()
                    .templateX(widget.getX())
                    .templateDx(widget.getDx())
                    .templateY(widget.getY())
                    .templateDy(widget.getDy())
                    .templateType(widget.getType())
                    .templateInputText(widget.getInputText())
                    .templateUuid(uuid)
                    .build();
            templateWidgetRepository.save(tempWidget);
        }

        String to = "receiver@example.com";
        String subject = "템플릿 저장 완료";
        String text = "템플릿 저장이 완료되었습니다.";
        emailService.sendEmail(to, subject, text);
        return null;
    }
}
