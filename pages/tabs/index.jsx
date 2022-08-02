import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Light from "./light";
import Full from "./full";
import Aliance from "./aliance";

export default function Example() {
    const data = [
        {
            label: "ライトパーティ",
            value: "lpt",
            desc: < Light />,
        },
        {
            label: "フルパーティ",
            value: "fpt",
            desc: < Full />,
        },

        {
            label: "アライアンス",
            value: "ali",
            desc: < Aliance />,
        },
    ];

    return (
        <div className="mx-1 border-width-2">
            <Tabs value="lpt">
                <TabsHeader>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
}