package b209.docdoc.server.template.service.Impl;

import b209.docdoc.server.config.utils.UUIDGenerator;
import b209.docdoc.server.email.service.EmailService;
import b209.docdoc.server.entity.Member;
import b209.docdoc.server.entity.Template;
//import b209.docdoc.server.entity.TemplateWidget;
import b209.docdoc.server.entity.Templatefile;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.MemberNotFoundException;
import b209.docdoc.server.exception.SaveFileException;
import b209.docdoc.server.repository.MemberRepository;
import b209.docdoc.server.repository.TemplateFileRepository;
import b209.docdoc.server.repository.TemplateRepository;
//import b209.docdoc.server.repository.TemplateWidgetRepository;
import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.template.dto.Request.TemplateWidgetDTO;
import b209.docdoc.server.template.dto.Response.TemplateNameResDTO;
import b209.docdoc.server.template.service.TemplateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;


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

//	private final TemplateWidgetRepository templateWidgetRepository;

	private final TemplateFileRepository templateFileRepository;

	private final MemberRepository memberRepository;

	private final EmailService emailService;


	@Value("${file.upload-dir}") // application.properties에 설정된 파일 업로드 디렉터리 경로
	private String uploadDir;

	public List<TemplateNameResDTO> getAllName(String memberEmail) {
		return templateRepository.findTemplatesByMemberEmail(memberEmail);
	}

	@Transactional
	public Object saveTemplate(DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO, String fromEmail) throws Exception {
		MultipartFile pdfFile = documentTemplateSaveReqDTO.getTemplateFile();
		Member member = memberRepository.findByMemberEmail(fromEmail).orElseThrow(() -> new MemberNotFoundException(ErrorCode.MEMBER_NOT_FOUND));

		String fileName = StringUtils.cleanPath(pdfFile.getOriginalFilename());
		File memberDir = new File(uploadDir + "/" + fromEmail);
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
		return null;
//
//		Templatefile templatefile = Templatefile.builder().
//				templatefileOriginalName(fileName).
//				templatefileSavedName(fromEmail + "/" + fileName).
//				build();
//		templateFileRepository.save(templatefile);

//		// 템플릿 파일은 수신자 모두가 공유하고 사용자 위젯만 서로 다름
//		for (int i = 0; i < documentTemplateSaveReqDTO.getTemplateName().length(); i++) { // 수신자들에게 템플릿 전송
//			String uuid = UUIDGenerator.generateUUID(); // 템플릿 uuid
//			String templateName = documentTemplateSaveReqDTO.getTemplateName(); // 템플릿 이름
//			String templateDeadline = documentTemplateSaveReqDTO.getTemplateDeadline(); // 템플릿 마감일
//			String toName = documentTemplateSaveReqDTO.getToName().get(i); // 수신자 이름
//			String toEmail = documentTemplateSaveReqDTO.getToName().get(i); // 수신자 이메일
//
//			// 사용자 템플릿 생성
//			Template template = Template.builder().
//					member(member)
//					.templatefileIdx(templatefile) // 템플릿 파일
//					.templateUuid(uuid) // 템플릿 uuid
//					.templateType(templateType) // 템플릿 종류
//					.templateName(templateName) // 템플릿 파일 이름
//					.templateIsFavorite(false) // 즐겨 찾기 안함
//					.templateIsCompleted(false) // 작성 완료 안함
//					.templateIsDeleted(false) // 삭제 안함
//					.templateDeadline(templateDeadline) // 마감일
//					.templateToName(toName) // 수신자 이름
//					.templateToEmail(toEmail) // 수신자 이메일
//					.templateFromName(member.getMemberName()).templateFromEmail(fromEmail).build();
//			templateRepository.save(template);

		// 사용자 위젯 생성
//			List<TemplateWidgetDTO> templateWidget = documentTemplateSaveReqDTO.getTemplateWidget();
//			List<TemplateWidget> templateWidgets = templateWidget.stream().map(widget ->
//					TemplateWidget.builder()
//							.templateX(widget.getX()) // 왼쪽위 x 좌표
//							.templateDx(widget.getDx()) // 가로 길이
//							.templateY(widget.getY()) // 왼쪽위 y 좌표
//							.templateDy(widget.getDy()) // 세로 길이
//							.templateType(widget.getType()) //  위젯 종류
//							.templateInputText(widget.getInputText()) // 위젯 내용
//							.templateUuid(uuid) // 템플릿 uuid
//							.build())
//					.collect(Collectors.toList());
//			templateWidgetRepository.saveAll(templateWidgets);

//			emailService.sendTemplateMessage(uuid, toName, toEmail, fromEmail, templateDeadline); // 이메일로 템플릿 전송
//		}
//		return null;
	}


}


