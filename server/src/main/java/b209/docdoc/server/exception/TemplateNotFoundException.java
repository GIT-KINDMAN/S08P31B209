package b209.docdoc.server.exception;

public class TemplateNotFoundException extends DocdocServerException {
    public TemplateNotFoundException(ErrorCode errorCode) {
        super(errorCode.TEMPLATE_NOT_FOUND);
    }
}
