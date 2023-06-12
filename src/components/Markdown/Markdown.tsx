import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Markdown = ({ content }: { content: string }) => {
    return (
        <ReactMarkdown className="prose prose-blockquote:my-2 prose-p:my-2 prose-li:my-0 w-full max-w-full p-4" children={content} remarkPlugins={[remarkGfm]} />
    );
};

export default Markdown;
