// import clsx from "clsx";
// import React, { Fragment } from "react";
// import HomeBlogPostCard from "../Homeblog/HomeBlogPostCard";
// import TitleSubtitle from "../TitleSubtitle";
// import Button from "../Button";

// const BlogsSection: React.FC<{
//   block?: BlogTitleSectionFragment;
//   allBlogs?: BlogDetailPageFragment[];
// }> = ({ block, allBlogs }) => {
//   const { blog_button, title_subtitle, section_theme } = block || {};
//   return (
//     <Fragment>
//       {/* <div
//         className={clsx(
//           "homeblog-section py-[3em]",
//           section_theme ?? "bg-white"
//         )}
//       >
//         <div className="container">
//           <div className="pb-[3em]">
//             <div>
//               {title_subtitle && <TitleSubtitle block={title_subtitle} />}
//             </div>

//             <div className="mt-[3.125em]">
//               <ul className="grid grid-cols-1 sm:grid-cols-2 emd:grid-cols-3 gap-x-[1.875em] gap-y-[1.875em] items-start">
//                 {allBlogs?.map((item, index) => {
//                   return <HomeBlogPostCard key={index} block={item} />;
//                 })}
//               </ul>
//               <div className=" mt-[2.75em] mx-auto text-center">
//                 {blog_button && (
//                   <Button
//                     block={blog_button}
//                     className="hover:bg-[#222549] hover:text-[#FFF] px-[1.5em] sm:px-[3em] !py-[1em] sm:!py-[1.3em] text-sm sm:text-base xl:text-lg"
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </Fragment>
//   );
// };

// export default BlogsSection;
