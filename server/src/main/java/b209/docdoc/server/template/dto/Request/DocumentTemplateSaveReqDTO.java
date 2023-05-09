package b209.docdoc.server.template.dto.Request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DocumentTemplateSaveReqDTO {
	String	to_email;
	String	to_name;
	String	template_file;
	String	template_deadlline;
	TemplateWidgetDTO	template_widget;
	String	template_name;



}
