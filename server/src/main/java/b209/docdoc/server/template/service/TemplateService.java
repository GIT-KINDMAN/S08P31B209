package b209.docdoc.server.template.service;

import b209.docdoc.server.entity.Template;
import b209.docdoc.server.repository.TemplateFileRepository;
import b209.docdoc.server.repository.TemplateRepository;
import b209.docdoc.server.repository.TemplateWidgetRepository;
import b209.docdoc.server.template.dto.Response.TemplateNameResDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class TemplateService {
	private static final String METHOD_NAME = TemplateService.class.getName();
	private final TemplateRepository templateRepository;

	private final TemplateWidgetRepository templateWidgetRepository;

	private final TemplateFileRepository templateFileRepository;

	public List<String> getAllName(String memberEmail){
		return templateRepository.findTemplateNamesByMemberEmail(memberEmail);
	}

	@Transactional
	public Object saveTemplate(){

		return null;
	}
}
