package b209.docdoc.server.config.utils;

import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.InvalidFileExtensionException;
import b209.docdoc.server.exception.SaveFileException;
import b209.docdoc.server.exception.SaveFileNotFoundException;
import b209.docdoc.server.file.dto.FileDTO;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.UUID;

@Component
@Log4j2
public class FileHandler {

    @Value("${file.dir}")
    private String dir;

    @Transactional
    public FileDTO savedFile(MultipartFile file, String[] extensions) {
        // 파일없으면 에러
        if (file.isEmpty()) throw new SaveFileNotFoundException(ErrorCode.FILE_IS_NULL);
        String originalName = file.getOriginalFilename();
        String uuid = UUID.randomUUID().toString();
        // 확장자 유효성 검사
        String extension = originalName.substring(originalName.lastIndexOf(".") + 1);
        boolean isValidExtension = Arrays.stream(extensions).anyMatch(extension::equalsIgnoreCase);
        if (!isValidExtension) throw new InvalidFileExtensionException(ErrorCode.INVALID_FILE_EXTENSION);
        String savedName = uuid + "." + extension;
        // 파일저장경로는 업로드일/uuid.확장자로 중복을 피한다. 업로드시간은 백엔드 서버 기준으로한다.
        LocalDateTime now = LocalDateTime.now();
        String uploadDate = now.format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        String savedPath = dir + uploadDate + File.separator + savedName;
        // 폴더가 없으면 만들기
        File saveFolder = new File(dir + uploadDate);
        if (!saveFolder.exists()) {
            saveFolder.mkdirs();
        }
        // 파일 저장
        try {
            log.info("Attempting to save file at " + savedPath);
            file.transferTo(new File(savedPath));
            log.info("File saved successfully at " + savedPath);
        } catch (IOException e) {
            log.error("Failed to save file", e);
            throw new SaveFileException(ErrorCode.FILE_CANNOT_SAVE);
        }

        return FileDTO.builder()
                .originalName(originalName)
                .savedName(savedName)
                .savedPath(savedPath)
                .uploadDate(now)
                .build();
    }

    public String extractUUID(FileDTO fileDTO) {
        String savedName = fileDTO.getSavedName();;
        return savedName.substring(0, savedName.lastIndexOf("."));
    }
}
