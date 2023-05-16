package b209.docdoc.server.api.file.service.impl;

import b209.docdoc.server.api.file.dto.FileDTO;
import b209.docdoc.server.api.file.service.ImagefileService;
import b209.docdoc.server.config.utils.FileHandler;
import b209.docdoc.server.domain.entity.Imagefile;
import b209.docdoc.server.domain.repository.ImagefileRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
@Log4j2
public class ImagefileServiceImpl implements ImagefileService {

    private final FileHandler fileHandler;
    private final ImagefileRepository imagefileRepository;

    @Override
    @Transactional
    public Imagefile saveImage(MultipartFile multipartFile) {
        FileDTO fileDTO = fileHandler.savedFile(multipartFile, new String[] {"jpg, jpeg, png, gif, bmp"});
        Imagefile imagefile = Imagefile.builder()
                .imagefileOriginalName(fileDTO.getOriginalName())
                .imagefileSavedName(fileDTO.getSavedName())
                .imagefileSavedPath(fileDTO.getSavedPath())
                .build();
        return imagefileRepository.save(imagefile);
    }
}
