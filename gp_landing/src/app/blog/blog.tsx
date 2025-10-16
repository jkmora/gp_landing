import React from 'react';
import TextBlog from './TextBlog';
import VideoBlog from './videoBlog';

const consClassName = ({
    classNameSeparatorTop: "text-orange-300",
    classNameSeparatorBotton: "text-orange-300",
    classNameBg: "bg-gradient-to-t from-emerald-900/70 to-[#DDE5B6]..." //bg-gradient-to-r from-green-900 via-stone-800 to-green-700"bg-gradient-to-r from-white via-blue-50 to-white"
});

const Blog: React.FC = () => {
    return (
        <>
            <section className={`${consClassName.classNameBg} min-w-screen min-h-screen py-12`}>
                <TextBlog/>
                <VideoBlog/>
            </section>
        </>
    )
}
export default Blog;