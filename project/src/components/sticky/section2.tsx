import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section2Page() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "sssscarousel",
    arrow: false,
  };
  return (
    <>
      <section className="stisec1">
        <div className="mstidiv">
          <div className="mstidiv1">
            <div className="suba1">
              <h1 className="a22">CATEGORIES</h1>
              <div className="suba11">
                <h2>Affaires newsion</h2> <p>3</p>
              </div>
              <div className="suba12">
                <h2>Awards</h2> <p>3</p>
              </div>
              <div className="suba12">
                <h2>Events</h2> <p>5</p>
              </div>
              <div className="suba12">
                <h2>How to</h2> <p>6</p>
              </div>
              <div className="suba11">
                <h2>Style inspiration</h2> <p>2</p>
              </div>
              <h1 className="a22">POPULAR POSTS</h1>
              <div className="subbb1">
                <div className="subb11">
                  <div>
                    <img src="/image/c1.jpg" alt="c1" className="smdimage" />
                  </div>
                  <div className="subb11t">
                    <h1>
                      New Bridal Collection <br />
                      2020
                    </h1>
                    <p>December 24, 2021</p>
                  </div>
                </div>
                <br />
                <hr className="dhr" />
              </div>
              <div className="subbb1">
                <div className="subb11">
                  <div>
                    <img src="/image/c2.jpg" alt="c1" className="smdimage" />
                  </div>
                  <div className="subb11t">
                    <h1>
                      7 Best Runway Beauty <br />
                      Looks
                    </h1>
                    <p>December 24, 2021</p>
                  </div>
                </div>
                <br />
                <hr className="dhr" />
              </div>
              <div className="subbb1">
                <div className="subb11">
                  <div>
                    <img src="/image/c3.jpg" alt="c1" className="smdimage" />
                  </div>
                  <div className="subb11t">
                    <h1>
                      How To Fake A Healthy <br />
                      Glow
                    </h1>
                    <p>December 24, 2021</p>
                  </div>
                </div>
                <br />
                <hr className="dhr" />
              </div>
              <div className="subbb1">
                <div className="subb11">
                  <div>
                    <img src="/image/c4.jpg" alt="c1" className="smdimage" />
                  </div>
                  <div className="subb11t">
                    <h1>
                      Magic Of New <br />
                      Beginnings
                    </h1>
                    <p>December 24, 2021</p>
                  </div>
                </div>
                <br />
                <hr className="dhr" />
              </div>
              <div className="subbb1">
                <div className="subb11">
                  <div>
                    <img src="/image/c5.jpg" alt="c1" className="smdimage" />
                  </div>
                  <div className="subb11t">
                    <h1>
                      We can make your work <br />
                      better
                    </h1>
                    <p>December 24, 2021</p>
                  </div>
                </div>
                <br />
                <hr className="dhr" />
              </div>
              <h1 className="a22">TAGS</h1>
              <div className="subc1">
                <div className="bb1">
                  <p>ACCESSORIES</p>
                </div>
                <div className="bb2">
                  <p>Award</p>
                </div>
              </div>
              <div className="subc1">
                <div className="bb2">
                  <p>Comb</p>
                </div>
                <div className="bb2">
                  <p>Hair</p>
                </div>
                <div className="bb2">
                  <p>Bridal</p>
                </div>
              </div>
              <div className="subc1">
                <div className="bb3">
                  <p>Headband</p>
                </div>
                <div className="bb2">
                  <p>Pins</p>
                </div>
                <div className="bb2">
                  <p>Tiaras</p>
                </div>
              </div>
            </div>
            <div className="lastdiv1">
              <h1>ARCHIVES</h1>
            </div>
            <div className="lastdiv2">
              <p>December 2021</p>
              <p>15</p>
            </div>
          </div>
          <div className="mstidiv2">
            <div>
              <h1 className="h1b">We can make your work better</h1>
            </div>
            <div className="subg1">
              <p>By</p>
              <p className="ppm">Admin /</p>
              <p> December 24, 2021 |</p>
              <img src="/image/eye.png" alt="1" />
              <p> 209 Views</p>
              <img src="/image/comment.png" alt="2" />
              <p>3Comments</p>
              <img src="/image/flag.png" alt="3" />
              <p>Sticky</p>
            </div>
            <div className="subimg">
              <img src="/image/single-blog-2.jpg" alt="2" />
            </div>
            <div className="subg2">
              <p>
                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla
                nibh, idae gravida mi purus sit amet erat. Ut dictum nisi
                massa.Maecenas id justo rhoncus, volutpat nunc sit amet,
                facilisiulum scelerisque dictum Maecenas id justo rhoncus,
                volutpat nunc sit amet, facilisis sem. Vestibulum scelerisque
                dictsap.
              </p>
            </div>
            <div className="subg3">
              <img src="/image/line.png" alt="ll" />
              <p>
                I think it’s important people see themselves in film, but it’s
                even more important they see people they maybe don’t know as
                well.
              </p>
            </div>
            <div className="subg4">
              <p>
                Fusce eget malesuada eros. Vivamus eros dolor, auctor aliquet
                dolor sit amet, euismod imperdiet ex. Nam sed nulla sed massa
                suscipit feugiat. Mauris et nunc ornare, placerat ex ac,
                interdum magna. Vestibulum urna massa, hendrerit sed fringilla
                in, mollis vitae tellus. Vestibulum mattis nulla elementum
                tristique fringilla. Morbi in sollicitudin erat. Ut quis
                tristique mauris. Proin risus purus, iaculis a orci ut, cursus
                bibendum panisl. Duis aliquam gravida eros eget molestie. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Suspendisse pharetra, arcu eu porta
                aliquet, eros dui tincidunt purus, eu vehicula magna nisl in
                purus.
              </p>
              <br />
              <p>
                Vivamus eros dolor, auctor aliquet dolor sit amet, euismod
                imperdiet ex. Nam sed nulla sed massa suscipit feugiat. Mauris
                et nunc ornare, placerat ex ac, interdum magna. Vestibulum urna
                massa, hemolli
              </p>
            </div>
            <div className="subg5">
              <p>#Awards</p>
              <p>#Bridal</p>
              <p>#Comb</p>
              <p>#Hair</p>
              <p>#Pins</p>
            </div>
            <br />
            <div className="subg6">
              <p>SHARE:</p>
              <a href="">
                <img src="/image/f.png" alt="f" />
              </a>
              <a href="">
                <img src="/image/tw.png" alt="f" />
              </a>
              <a href="">
                <img src="/image/in.png" alt="f" />
              </a>
              <a href="">
                <img src="/image/g.png" alt="f" />
              </a>
              <a href="">
                <img src="/image/t.png" alt="f" />
              </a>
            </div>
            <div className="subg7">
              <hr className="dhr" />
            </div>
            <div className="subg8">
              <img src="/image/person.png" alt="p" className="cimage" />
              <h1>ADMIN</h1>
              <p>Website</p>
            </div>
            <div className="subg9">
              <hr className="dhr" />
              <br />
              <h1 className="sheading">You may also like this</h1>
              <Slider {...settings}>
                <div className="sim">
                  <img src="/image/s1.jpg" alt="img1" />
                  <h1>New Bridal Collection 2020</h1>
                </div>
                <div className="sim">
                  <img src="/image/s2.jpg" alt="img1" />
                  <h1>How To Fake A Healthy Glow</h1>
                </div>
                <div className="sim">
                  <img src="/image/s3.jpg" alt="img1" />
                  <h1>Magic Of New Beginnings</h1>
                </div>
              </Slider>
              <br />
              <br />
              <hr className="dhr" />
            </div>
            <h1 className="ml-4 text-xl">There are 3 comments</h1>
            <div className="subg10">
              {/* <div className="subg10s1"> */}
              <img src="/image/person.png" alt="1" className="perimg" />
              {/* </div> */}
              <div className="subg10s2">
                <h2>Admin</h2>
                <p>
                  Nullam imperdiet, sem at fringilla lobortis, sem nibh
                  fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum
                  nisi massa, vitae pusem at fringilla lobor
                </p>
                <div className="subg10s3">
                  <p>October 18, 2018</p>
                  <img src="/image/line.png" alt="11" />
                  <h4>Log in to Reply</h4>
                </div>
              </div>
            </div>
            <div className="subg10">
              <img src="/image/line.png" alt="11" />
              <img src="/image/person.png" alt="1" className="perimg" />

              <div className="subg10s2">
                <h2>Admin</h2>
                <p>
                  Nullam imperdiet, sem at fringilla lobortis, sem nibh
                  fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum
                  nisi massa, vitae pusem at fringilla lobor
                </p>
                <div className="subg10s3">
                  <p>October 18, 2018</p>
                  <img src="/image/line.png" alt="11" />
                  <h4>Log in to Reply</h4>
                </div>
              </div>
            </div>
            <div className="subg11">
              <div className="subg10">
                <img src="/image/person.png" alt="1" className="perimg" />

                <div className="subg10s2">
                  <h2>Admin</h2>
                  <p>
                    Nullam imperdiet, sem at fringilla lobortis, sem nibh
                    fringilla nibh, idae gravida mi purus sit amet erat. Ut
                    dictum nisi massa, vitae pusem at fringilla lobor
                  </p>
                  <div className="subg10s3">
                    <p>October 18, 2018</p>
                    <img src="/image/line.png" alt="11" />
                    <h4>Log in to Reply</h4>
                  </div>
                </div>
              </div>
              <hr className="dhr" />
            </div>
            <h2 className="lasttext">Leave us a comment</h2>
          </div>
        </div>
      </section>
    </>
  );
}
