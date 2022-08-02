import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

export default function Example() {
    const data = [
        {
            label: "ライトパーティ",
            value: "lpt",
            desc: `It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people 
            who are like offended by it, it doesn't matter.`,
        },
        {
            label: "フルパーティ",
            value: "fpt",
            desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
        },

        {
            label: "アライアンス",
            value: "ali",
            desc: `We're not always in the position that we want to be at.
            We're constantly growing. We're constantly making mistakes. We're 
            constantly trying to express ourselves and actualize our dreams.`,
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