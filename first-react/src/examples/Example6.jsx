import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Page />
);

function Page() {
        return (
        <main>
            <ol>
                <li>Closer to getting a job</li>
                <li>Fullstack is the way</li>
                <li>Learning new things is fun</li>
                <li>I will be making cool webpages</li>
            </ol>
        </main>
        )
};