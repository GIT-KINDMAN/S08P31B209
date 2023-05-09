package b209.docdoc.server.template.service;

import b209.docdoc.server.repository.TemplateRepository;
import b209.docdoc.server.repository.TemplateWidgetRepository;
import b209.docdoc.server.template.dto.Response.TemplateNameResDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class TemplateService {
	private static final String METHOD_NAME = TemplateService.class.getName();
	private final TemplateRepository templateRepository;

	private final TemplateWidgetRepository templateWidgetRepository;

	public TemplateNameResDTO getAllName(){
		return null;
	}
}
