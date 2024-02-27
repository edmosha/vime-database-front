import React, { type FC, useState } from "react";
import { SearchProps } from "antd/es/input/Search";
import { Input, List, Flex } from "antd";
import ListItem from "./ListItem";
import { DataType } from "../types";
import { apiUrl } from "../constants";
import "./index.css";

const {Search} = Input;

const SearchForm: FC = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[]>([]);
    const [isError, setIsError] = useState(false);

    const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
        if (value) {
            setIsError(false);
            setLoading(true);
            fetch(apiUrl + "/user?item=" + value)
                .then((res) => res.ok ? res.json() : Promise.reject())
                .then((res) => setData(res))
                .catch(() => setIsError(true))
                .finally(() => setLoading(false))
        }
    };

    return (
        <Flex vertical align="center" className="container" flex={1}>
            <Search
                placeholder="ник или ip"
                allowClear
                enterButton
                size="large"
                onSearch={onSearch}
                style={{borderRadius: 12}}
            />
            <Flex className="list-container">
                {loading ? (
                        <List style={{width: "100%"}} itemLayout="horizontal">
                            {[1, 2, 3, 4, 5].map(() => (
                                <List.Item><ListItem item={{crypt: "", ip: "", name: "", id: 0}} isLoad={true}/></List.Item>
                            ))}
                        </List>
                    )
                    : (
                        <List
                            className="demo-loadmore-list"
                            itemLayout="horizontal"
                            dataSource={data}
                            locale={{emptyText: isError ? "Произошла ошибка" : "Ничего не найдено"}}
                            style={{width: "100%"}}
                            renderItem={(item) => (
                                <List.Item>
                                    <ListItem item={item} isLoad={loading}/>
                                </List.Item>
                            )}
                        />
                    )}
            </Flex>
        </Flex>
    );
};

export default SearchForm;