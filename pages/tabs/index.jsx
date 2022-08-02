import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function ReactTabs() {
    return (
        <Tabs className="px-10">
            <container className="w-80 bg-red-400">
                <TabList>
                    <Tab>ライトパーティ</Tab>
                    <Tab>フルパーティ</Tab>
                    <Tab>アライアンス</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content3</h2>
                </TabPanel>
            </container>
        </Tabs>
    )
};