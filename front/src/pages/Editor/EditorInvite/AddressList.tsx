import { fetchEditorAddressList } from "@api/addressAPI";

import { updateSend } from "@/store/slice/imageViewSlice";
import { RootState } from "@/store/store";

import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "twin.macro";

interface AddressListProps {
  idx: string;
  index: number;
}

const AddressList = ({ index, idx }: AddressListProps) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSelfDisable, setIsSelfDisable] = useState(true);
  const [email, setEmail] = useState("");
  const authToken = useSelector((state: RootState) => state.auth.authToken);

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery) {
        const token = authToken ?? "unknown";
        try {
          const request = await fetchEditorAddressList(searchQuery, token);
          console.log(
            "이름을 포함하는 주소록 가져오기 성공",
            request.data.value.addresses,
          );
          dispatch(
            updateSend({
              email: request.data.value.addresses.email,
              name: request.data.value.addresses.name,
              phone: request.data.value.addresses.phone,
              position: request.data.value.addresses.position,
            }),
          );
          setSearchResults(request.data.value.addresses);
        } catch (error) {
          console.error("주소록 가져오기 실패", error);
        }
      }
    };

    fetchSearchResults();
  }, [authToken, dispatch, searchQuery]);

  return (
    <>
      <div
        className="InviteBox"
        tw="flex flex-col border-2 border-lightgray-500 rounded-[16px] pb-4 mb-6"
      >
        <span className="InviteNumber" tw="px-4 my-2">
          {index}
        </span>
        <input
          className="InviteNameInput"
          tw="w-96 border border-lightgray-500 mx-4 my-3 px-4 text-xl"
          placeholder="이름"
          required={true}
          list={idx}
          onChange={handleNameInputChange}
        />
        <datalist id={idx}>
          {searchResults?.map((result, index) => (
            <option
              key={index}
              value={result.name}
              onClick={() => {
                setEmail(result.email);
                if (!isSelfDisable) {
                  dispatch(
                    updateSend({
                      ...result,
                    }),
                  );
                }
              }}
            ></option>
          ))}
        </datalist>
        <input
          className="InviteEmailInput"
          tw="w-96 border border-lightgray-500 mx-4 my-3 px-4 text-xl"
          placeholder="Email"
          required={true}
          value={email}
          onChange={handleEmailInputChange}
        />

        <div tw="flex justify-around">
          <input
            className="InvitePhoneTag"
            tw="w-44 border border-lightgray-500   my-3 px-4 text-xl"
            placeholder="연락처"
            disabled={isSelfDisable}
          />
          <input
            className="InviteGenderTag"
            tw="w-44 border border-lightgray-500 my-3 px-4 text-xl"
            placeholder="소속"
            disabled={isSelfDisable}
          />
        </div>
        <div className="InviteCheckBox" tw="mx-4 align-middle">
          <input
            type="checkbox"
            onClick={() => setIsSelfDisable(!isSelfDisable)}
          />
          <span tw="text-xs relative bottom-0.5 font-bold">
            {" "}
            직접 입력할게요
          </span>
        </div>
      </div>
    </>
  );
};

export default AddressList;
