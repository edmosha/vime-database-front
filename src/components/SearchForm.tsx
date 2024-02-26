import React, {type FC, useState} from 'react';
import {SearchProps} from "antd/es/input/Search";
import {Input, List, Flex} from 'antd';
import ListItem from "./ListItem";
import {DataType} from "../types/types";

const {Search} = Input;

const dataUrl = `http://165.227.143.6:8080`;

const SearchForm: FC = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[]>([]);

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        if (value) {
            setLoading(true);
            fetch(dataUrl + "/govno/user?item=" + value)
                .then((res) => res.json())
                .then((res) => {
                    setLoading(false);
                    setData(res);
                });
        }
    };

    return (
        <Flex vertical align="center" style={container} flex={1}>
            <Search
                placeholder="ник или ip"
                allowClear
                enterButton
                size="large"
                onSearch={onSearch}
                style={{marginBottom: 50}}
            />

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
                        style={{width: "100%"}}
                        renderItem={(item) => (
                            <List.Item>
                                <ListItem item={item} isLoad={loading}/>
                            </List.Item>
                        )}
                    />
                )}

        </Flex>
    );
};

const container: React.CSSProperties = {
    width: "100%",
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "60px 40px",
};

export default SearchForm;