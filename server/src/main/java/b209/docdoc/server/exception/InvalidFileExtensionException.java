package b209.docdoc.server.exception;

public class InvalidFileExtensionException extends DocdocServerException{
	public InvalidFileExtensionException(ErrorCode errorCode) {
		super(errorCode.MEMBER_ALREADY_EXIST);
	}
}
