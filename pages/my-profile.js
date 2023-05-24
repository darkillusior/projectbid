import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import Link from "next/link";
import { parseCookies } from "nookies";
import Bidslist from "@/components/Bidslist";
import Card from "@/components/Card";
import Modal2 from "@/components/Modal2";
function Profile({ user, postsData }) {
  const [post, setPost] = useState(postsData || []);

  const [Mybid, setshowMybid] = useState(false);
  const [Myidea, setshowMyidea] = useState(false);
  const [MyPost, setshowMyPost] = useState(false);
  const [bid, setMybids] = useState(user.mybid || []);

  const [idea, setMyidea] = useState(user.myidea || []);

  console.log(user)
  return (
    <>
      {user && (
        <main className="profile-page">
          <Navbar user={user} />
          {/* <section className="relative block h-500-px">
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)"}}>
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section> */}
          <section className="relative bg-blueGray-200">
            <div className="container-m px-4">
              <div className="flex flex-col min-w-0 break-words bg-transparent w-full mb-6  rounded-lg ">
                <div className="px-6">
                  <div className="flex flex-wrap  items-center justify-center">
                    <div className="w-3/1 lg:w-1/6  lg:order-2  flex flex-col justify-center relative -mt-16">
                      <img
                        alt="..."
                        src={user.userimg}
                        className="shadow-xl rounded-full  border-none w-52 h-52"
                      />
                      <Modal2 />
                    </div>
                    <div className="w-full lg:w-4/12 px-4 flex items-center justify-center mt-5 sm:mt-0 lg:mt-0 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-2 sm:mt-0 !important">
                        <button
                          onClick={() => {
                            setshowMybid(true);
                            setshowMyidea(false);
                            setshowMyPost(false);
                          }}
                          className="bg-pink-500 active:bg-pink-600 uppercase text-blue-200 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          MyBid
                        </button>
                        <button
                          onClick={() => {
                            setshowMybid(false);
                            setshowMyidea(true);
                            setshowMyPost(false);
                          }}
                          className="bg-pink-500 active:bg-pink-600 uppercase text-blue-200 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          MyIdea
                        </button>
                        <button
                          onClick={() => {
                            setshowMybid(false);
                            setshowMyidea(false);
                            setshowMyPost(true);
                          }}
                          className="bg-pink-500 active:bg-pink-600 uppercase text-blue-200 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          MyPost
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blue-200">
                            22
                          </span>
                          <span className="text-sm text-blue-200">Friends</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blue-200">
                            10
                          </span>
                          <span className="text-sm text-blue-200">Project</span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blue-200">
                            89
                          </span>
                          <span className="text-sm text-blue-200">Review</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <h3 className="text-4xl font-semibold leading-normal  text-blue-200 mb-2">
                      {user.name}
                    </h3>
                    <div className="mb-2 text-blue-200">
                      <i className="fas fa-university mr-2 text-lg font-semi-bold text-blue-200">{user.master}</i>
                     
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <Bidslist
                          bid={Mybid ? bid : null}
                          setMybids={setMybids}
                          setMyidea={setMyidea}
                          idea={Myidea ? idea : null}
                        />
                        {MyPost && (
                          <>
                            {post.map((item, index) => (
                              <Link
                                className="w-auto"
                                href={`/posts/${item._id}`}
                              >
                                <Card key={index} post={item} />
                              </Link>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default Profile;

export const getServerSideProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);
    const res = await axios.get(`${baseUrl}/api/profile`, {
      headers: { Authorization: token },
    });

    return { props: { postsData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};
