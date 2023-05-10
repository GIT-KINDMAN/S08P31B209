package b209.docdoc.server.box.service;

import b209.docdoc.server.entity.Template;
import b209.docdoc.server.repository.BoxRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
public class BoxService {

    private final BoxRepository boxRepository;

    public BoxService(BoxRepository boxRepository) {
        this.boxRepository = boxRepository;
    }

    @Transactional
    public Page<Template> getTemplates(String userEmail, List<String> keywords, String nameSort, String createdDateSort, String updatedDateSort, Pageable pageable) {
        String keyword = keywords.size() > 0 ? keywords.get(0) : "";

        Sort sort = Sort.by(Sort.Direction.fromString(nameSort), "templateName")
                .and(Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate"))
                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"));

        Pageable sortedPageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), sort);

        return boxRepository.findAllByKeyword(userEmail, keyword, sortedPageable);
    }
}