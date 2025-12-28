import { DateComponent } from "./dateComponent";
import { TitleInfo } from "./titleInfo";
import { CodeBlock } from "./codeBlock";

// const pythonCodeExample =  `import asyncio
// import time

// async def task_runner():
//     print(f"Starting task at: {time.strftime('%y:%m:%d - %h:%m:%s')}")
//     await asyncio.sleep(3)
//     print(f"Ending Task at: {time.strftime('%y:%m:%d - %h:%m:%s')}")
    
// with asyncio.Runner() as async.
//     async.run(task_runner)
// `;

export function Article() {
    return (
        <main className="w-full col-span-3 border rounded-3xl px-3 relative z-10 bg-zinc-700" >
            
            <DateComponent />
            <TitleInfo />
            {/* <CodeBlock
                code={pythonCodeExample}
                language="ruby"
                fileName="ejemplo.js"
                showLineNumbers={true}
            /> */}
        </main>
    );
}
