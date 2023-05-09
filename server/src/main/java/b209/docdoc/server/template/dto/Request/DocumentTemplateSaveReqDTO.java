package b209.docdoc.server.template.dto.Request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
public class DocumentTemplateSaveReqDTO {
	String	to_email;
	String	to_name;
	MultipartFile template_file;
	String	template_deadline;
	TemplateWidgetDTO	template_widget;
	String	template_name;

	@Builder
	public DocumentTemplateSaveReqDTO(String to_email, String to_name, MultipartFile template_file,
									  String template_deadline, TemplateWidgetDTO template_widget, String template_name) {
		this.to_email = to_email;
		this.to_name = to_name;
		this.template_file = template_file;
		this.template_deadline = template_deadline;
		this.template_widget = template_widget;
		this.template_name = template_name;
	}

	public static DocumentTemplateSaveReqDTO of(String to_email, String to_name, MultipartFile template_file,
												String template_deadline, TemplateWidgetDTO template_widget, String template_name) {
		return DocumentTemplateSaveReqDTO.builder()
				.to_email(to_email)
				.to_name(to_name)
				.template_file(template_file)
				.template_deadline(template_deadline)
				.template_widget(template_widget)
				.template_name(template_name)
				.build();
	}


}
