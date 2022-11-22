import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Markdown = ({ content }: { content: string }) => {
    return (
        <ReactMarkdown className="prose prose-blockquote:my-2 prose-p:mb-1 prose-ul:mt-2 prose-li:mt-0 prose-li:mb-1 w-full max-w-full p-4" children={content} remarkPlugins={[remarkGfm]} />
    );
};

export default Markdown;
