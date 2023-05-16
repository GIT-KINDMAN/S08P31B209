import type { RootState } from "@store/store";

import {
  deleteAddress,
  deleteGroup,
  fetchAddressList,
} from "@/apis/addressAPI";
import { Icon } from "@/components/atoms";

import AddModal from "./AddModal";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import tw from "twin.macro";

const AddressBox = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const [addressData, setAddressData] = useState([]);
  const [addressGroups, setAddressGroups] = useState([]);
  const [groupName, setGroupName] = useState("");

  useEffect(() => {
    if (authState.authToken) {
      const token = authState.authToken;
      const group = groupName;
      console.log(token);
      fetchAddressList(token, group)
        .then((request) => {
          setAddressGroups(request.data.value.groups);
          setAddressData(request.data.value.addresses);
          console.log("address", request.data.value.addresses);
          console.log("address", request.data.value.groups);
        })
        .catch((e) => console.log(e));
    }
  }, [groupName]);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  interface addressState {
    id: number;
    name: string;
    email: string;
    group: string;
    phone: string;
    position: string;
  }
  const handleGroupClick = (group: string) => {
    setGroupName(group);
  };

  // 주소록 리스트 불러오기
  const addressList =
    addressData &&
    addressData.map((addressItem: addressState, i: number) => {
      return (
        <div key={i}>
          <ul
            className="MemberItem"
            tw="text-sm border-b border-dashed  my-2 flex "
          >
            <li tw="py-2 my-2 min-w-[1rem] max-w-[1rem] mx-4">
              <Icon
                icon="fi-sr-delete-user"
                size="xs"
                custom={tw`text-blue-600 hover:scale-110 cursor-pointer`}
                onClick={() => {
                  if (authState.authToken) {
                    const token = authState.authToken;
                    console.log(token);
                    deleteAddress(addressItem.id, token)
                      .then((request) => {
                        console.log(request.data);
                        fetchAddressList(token, groupName)
                          .then((request) => {
                            setAddressGroups(request.data.value.groups);
                            setAddressData(request.data.value.addresses);
                          })
                          .catch((e) => console.log(e));
                      })
                      .catch((e) => console.log(e));
                  }
                }}
              />
            </li>
            <li tw="py-2 my-2 min-w-[8rem] max-w-[8rem]  break-words">
              {addressItem?.name}
            </li>
            <li tw="py-2 my-2 min-w-[8rem] max-w-[8rem] mx-16 break-words  border-x-2">
              <p>
                {addressItem?.group} ({addressItem?.position})
              </p>
            </li>
            <li tw="py-2 my-2 min-w-[8rem] max-w-[8rem] mx-4 break-words ">
              {addressItem?.email}
            </li>
            <li tw="py-2 my-2 min-w-[8rem] max-w-[8rem] mx-12 break-words border-l-2">
              {addressItem?.phone}
            </li>
          </ul>
        </div>
      );
    });

  // 그룹명 불러오기
  const groupList =
    addressGroups &&
    addressGroups.map((GroupItem, i) => {
      return (
        <div
          className="GroupItem"
          tw="border-b border-dashed mx-4 my-2 py-2  justify-between flex"
          key={i}
        >
          <span
            tw="cursor-pointer hover:scale-105"
            onClick={() => {
              handleGroupClick(GroupItem);
            }}
          >
            {GroupItem}
          </span>
          {i != 0 ? (
            <Icon
              icon=" fi-rs-trash"
              custom={tw`cursor-pointer hover:scale-110`}
              onClick={() => {
                if (authState.authToken && i !== 0) {
                  const token = authState.authToken;
                  console.log(token);
                  deleteGroup(GroupItem, token)
                    .then((request) => {
                      console.log(request.data);
                      fetchAddressList(token, groupName).then((request) => {
                        setAddressGroups(request.data.value.groups);
                        setAddressData(request.data.value.addresses);
                      });
                    })
                    .catch((e) => console.log(e));
                }
              }}
            />
          ) : null}
        </div>
      );
    });

  return (
    <>
      <div tw=" bg-white w-full h-full flex flex-col select-none">
        <header
          className="AddressHeader"
          tw="border-b-2 text-2xl font-bold py-2 mx-6"
        >
          주소록 관리
        </header>
        <div className="AddressForm" tw="flex text-center w-[60rem] ">
          <div tw="flex flex-col   min-w-[18rem] max-w-[18rem] mx-auto">
            {/* 그룹명 부분 */}
            <div className="GroupWrap" tw="text-xl font-bold my-8">
              {/* 그룹 보기 */}
            </div>

            <div
              className="GroupsBox"
              tw="border-2 text-start min-h-[30rem] max-h-[30rem] text-xl overflow-y-auto  "
            >
              <div>{groupList}</div>
            </div>
          </div>

          {/* 그룹별 그룹원 부분 */}
          <div tw="flex flex-col   min-w-[40rem] max-w-[32rem] mx-auto">
            <div
              className="MemberWrap"
              tw="flex text-xl font-bold my-4 ml-8 justify-end "
            >
              {/* <div>그룹원 보기</div> */}
              <div tw=" text-sm pt-2" onClick={() => handleToggleModal()}>
                주소록 추가 <i className="fi fi-br-plus-small" />
              </div>
            </div>
            <div
              className="MembersBox"
              tw="border-2 text-center min-w-[54rem]  min-h-[30rem] max-h-[30rem] text-xl "
            >
              <div
                className="MemberHeader"
                tw="border-b border-b-2 px-8 my-2 flex justify-between px-4 "
              >
                <div tw="py-2 min-w-[10rem] max-w-[10rem] break-words ">
                  이름
                </div>
                <div tw="py-2 min-w-[10rem] max-w-[10rem] break-words">
                  소속(직책)
                </div>
                <div tw="py-2 min-w-[10rem] max-w-[10rem] break-words">
                  이메일
                </div>
                <div tw="py-2 min-w-[10rem] max-w-[10rem] break-words">
                  전화번호
                </div>
                <div tw="py-2  max-w-[10rem] break-words"></div>
              </div>
              {/*  */}
              <div tw=" min-h-[24rem] max-h-[24rem] overflow-y-auto">
                {addressList}
              </div>
            </div>
          </div>
        </div>
        {isOpenModal === true ? (
          <AddModal handleToggleModal={handleToggleModal} />
        ) : null}
      </div>
    </>
  );
};

export default AddressBox;
