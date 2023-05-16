package b209.docdoc.server.exception;

public class InvalidFileExtensionException extends DocdocServerException{
	public InvalidFileExtensionException(ErrorCode errorCode) {
		super(errorCode.TYPE_MISMATCH);
	}
}
