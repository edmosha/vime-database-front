import React, {type FC} from 'react';
import styled from "styled-components";
import { Skeleton, Typography } from 'antd';
import {DataType} from "../types";

const {Paragraph, Link} = Typography;

interface Props {
    item: DataType;
    isLoad: boolean;
}

const ListItem: FC<Props> = ({item, isLoad}) => {
    return (
        <ItemContainer>
            <div style={textContainer}>
                <Skeleton paragraph={false} loading={isLoad} active>
                    <Paragraph style={paragraph} copyable>{item.name}</Paragraph>
                </Skeleton>
            </div>
            <div style={textContainer}>
                <Skeleton paragraph={false} loading={isLoad} active>
                  <Link href={`https://check-host.net/ip-info?host=${item.ip}`} target="_blank">
                    <Paragraph style={{...paragraph, color: "#1677ff"}} copyable>{item.ip}</Paragraph>
                  </Link>
                </Skeleton>
            </div>
            <div style={{...textContainer, maxWidth: "20%"}}>
                <Skeleton paragraph={false} loading={isLoad} active>
                    <Paragraph style={paragraph}>{item.crypt}</Paragraph>
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

const paragraph: React.CSSProperties = {
  margin: "10px 0",
};

export default ListItem;