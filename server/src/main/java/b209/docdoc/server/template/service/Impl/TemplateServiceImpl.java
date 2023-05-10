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
import java.util.stream.Collectors;


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
	public Object saveTemplate(DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO, String memberEmail) throws Exception {
		MultipartFile pdfFile = documentTemplateSaveReqDTO.getTemplateFile();
		Member member = memberRepository.findByMemberEmail(memberEmail).orElseThrow(() -> new MemberNotFoundException(ErrorCode.MEMBER_NOT_FOUND));

		String fileName = StringUtils.cleanPath(pdfFile.getOriginalFilename());
		File memberDir = new File(uploadDir + "/" + memberEmail);
		if (!memberDir.exists()) {
			memberDir.mkdirs();
		}

		try {
			pdfFile.transferTo(new File(memberDir, fileName));
		} catch (IOException e) {
			throw new SaveFileException(ErrorCode.MEMBER_NOT_FOUND);
		}

		String fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
		String templateType;
		if (fileExtension.equalsIgnoreCase("pdf")) {
			templateType = "PDF";
		} else if (fileExtension.equalsIgnoreCase("doc") || fileExtension.equalsIgnoreCase("docx")) {
			templateType = "WORD";
		} else if (fileExtension.equalsIgnoreCase("xls") || fileExtension.equalsIgnoreCase("xlsx")) {
			templateType = "EXCEL";
		} else {
			templateType = "UNKNOWN";
		}

		String uuid = UUIDGenerator.generateUUID();
		Templatefile templatefile = Templatefile.builder().templatefileOriginalName(fileName).templatefileSavedName(memberEmail + "/" + fileName).build();
		templateFileRepository.save(templatefile);

		Template template = Template.builder().member(member).templatefileIdx(templatefile).templateUuid(uuid).templateType(templateType).templateName(documentTemplateSaveReqDTO.getTemplateName()).templateIsFavorite(false).templateIsCompleted(false).templateIsDeleted(false).templateDeadline(documentTemplateSaveReqDTO.getTemplateDeadline()).templateToName(documentTemplateSaveReqDTO.getToName().get(0)) // index 0으로 해둠
				.templateToEmail(documentTemplateSaveReqDTO.getToEmail().get(0)) // index 0으로 해둠
				.templateFromName(member.getMemberName()).templateFromEmail(memberEmail).build();
		templateRepository.save(template);

		List<TemplateWidgetDTO> templateWidget = documentTemplateSaveReqDTO.getTemplateWidget();
		List<TemplateWidget> templateWidgets = templateWidget.stream().map(widget -> TemplateWidget.builder().templateX(widget.getX()).templateDx(widget.getDx()).templateY(widget.getY()).templateDy(widget.getDy()).templateType(widget.getType()).templateInputText(widget.getInputText()).templateUuid(uuid).build()).collect(Collectors.toList());

		templateWidgetRepository.saveAll(templateWidgets);

		String to = "receiver@example.com";
		String subject = "템플릿 저장 완료";
		String text = "템플릿 저장이 완료되었습니다.";
//		emailService.sendEmail(to, subject, text);
		emailService.sendSimpleMessage(memberEmail);

		// 1. 이메일 docdoc 계정
		// 2. 이메일 보내는 부분
		// 3. 수신자 개수 만큼 Template 저장
		return null;
	}

}

