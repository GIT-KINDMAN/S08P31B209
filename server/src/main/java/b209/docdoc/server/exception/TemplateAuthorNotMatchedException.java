package b209.docdoc.server.exception;

public class TemplateAuthorNotMatchedException extends DocdocServerException {
    public TemplateAuthorNotMatchedException(ErrorCode errorCode) {
        super(ErrorCode.TEMPLATE_AUTHOR_NOT_MATCHED);
    }
}
