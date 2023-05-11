package b209.docdoc.server.exception;

public class SaveFileException extends DocdocServerException{
    public SaveFileException(ErrorCode errorCode) {
        super(errorCode.FOLDER_NOT_FOUND);
    }
}
