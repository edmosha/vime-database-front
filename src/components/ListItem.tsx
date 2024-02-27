import React, {type FC} from 'react';
import styled from "styled-components";
import {Skeleton, Typography} from 'antd';
import {DataType} from "../types";

const {Paragraph} = Typography;

interface Props {
    item: DataType;
    isLoad: boolean;
}

const ListItem: FC<Props> = ({item, isLoad}) => {
    return (
        <ItemContainer>
            <div style={textContainer}>
                <Skeleton paragraph={false} loading={isLoad} active>
                    <Paragraph copyable>{item.name}</Paragraph>
                </Skeleton>
            </div>
            <div style={textContainer}>
                <Skeleton paragraph={false} loading={isLoad} active>
                    <Paragraph copyable>{item.ip}</Paragraph>
                </Skeleton>
            </div>
            <div style={{...textContainer, maxWidth: "20%"}}>
                <Skeleton paragraph={false} loading={isLoad} active>
                    <Paragraph>{item.crypt}</Paragraph>
                </Skeleton>
            </div>
        </ItemContainer>
    );
};

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

const textContainer: React.CSSProperties = {
    width: "40%",
    textAlign: "left",
};

export default ListItem;