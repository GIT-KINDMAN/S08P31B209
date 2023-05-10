export interface MemberType {
  idx: number;
  name: string;
  email: string;
  thumbnailURI: string;
}

export interface MemberProfileType extends MemberType {
  phoneNo: string;
  birth: Date;
}
