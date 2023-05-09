package b209.docdoc.server.template.dto.Request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class DocumentTemplateSaveReqDTO {
	String	toEmail;
	String	toName;
	MultipartFile templateFile;
	String	templateDeadline;
	List<TemplateWidgetDTO>	templateWidget;
	String	templateName;

	@Builder
	public DocumentTemplateSaveReqDTO(String toEmail, String toName, MultipartFile templateFile,
										  String templateDeadline, List<TemplateWidgetDTO> templateWidgets, String templateName) {
		this.toEmail = toEmail;
		this.toName = toName;
		this.templateFile = templateFile;
		this.templateDeadline = templateDeadline;
		this.templateWidget = templateWidgets;
		this.templateName = templateName;
	}

	public static DocumentTemplateSaveReqDTO of(String toEmail, String toName, MultipartFile templateFile,
													String templateDeadline, List<TemplateWidgetDTO> templateWidgets, String templateName) {
		return DocumentTemplateSaveReqDTO.builder()
				.toEmail(toEmail)
				.toName(toName)
				.templateFile(templateFile)
				.templateDeadline(templateDeadline)
				.templateWidgets(templateWidgets)
				.templateName(templateName)
				.build();
	}


}
