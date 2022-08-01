import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function ReactTabs() {
    return (
        <Tabs>
            <TabList>
                <Tab>Title1</Tab>
                <Tab>Title2</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content2</h2>
            </TabPanel>
        </Tabs>
    )
};