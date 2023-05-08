package b209.docdoc.server.entity;

import b209.docdoc.server.config.utils.BaseDateTime;
import b209.docdoc.server.config.utils.BooleanToYNConverter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class AddressBook extends BaseDateTime implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressIdx;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_idx")
    private Member memberIdx;

    @NotNull
    @Column(length = 10)
    private String addressName;

    @NotNull
    @Column(length = 30)
    private String addresEmail;

    @NotNull
    @Column(length = 15)
    private String addressPhone;

    @Convert(converter = BooleanToYNConverter.class)
    private Boolean addressSent;

    @Convert(converter = BooleanToYNConverter.class)
    private Boolean addressRegister;

    @Override
    public void prePersist() {
        super.prePersist();
    }
}
