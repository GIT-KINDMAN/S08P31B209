package b209.docdoc.server.exception;

public class ReceiverNotFoundException extends DocdocServerException {
    public ReceiverNotFoundException(ErrorCode errorCode) {
        super(errorCode.RECEIVER_NOT_FOUND);
    }
}
