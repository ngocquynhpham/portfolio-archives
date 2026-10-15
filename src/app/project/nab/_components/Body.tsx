import ImageNAB from "../assets/nab_desktop.png";
import ImageNABMobile from "../assets/nab_mobile.png";

export default function NabBody() {
  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span>
                🌐{" "}
                <a
                  href="https://chayvituonglaixanh.com.vn/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  chayvituonglaixanh.com.vn
                </a>
              </span>
              <span>📅 Year: 2024</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-semibold">
                Expired
              </span>
            </div>
      
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Project Description
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
                <p>
                  Chay Vi Tuong Lai Xanh is an online running tournament by{" "}
                  <a
                    href="https://www.namabank.com.vn/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Nam A Bank
                  </a>{" "}
                  and the{" "}
                  <a
                    href="https://5h30.vn/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    5h30
                  </a>{" "}
                  running community, promoting a green lifestyle in the community.
                </p>
                <blockquote className="border-l-4 border-primary/40 pl-4 italic text-neutral-600">
                  The 2024 tournament helps create green learning spaces for young
                  people and encourages eco-friendly habits through physical activity.
                </blockquote>
                <p>
                  I developed this product by generating ideas from customer
                  requirements, creating design layouts and color schemes based on the
                  key visual. Built the online running tournament using HTML, CSS, and
                  JavaScript, and integrated{" "}
                  <a
                    href="https://www.strava.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-500 hover:underline font-medium"
                  >
                    Strava API
                  </a>{" "}
                  to retrieve activity data. The website includes dynamic
                  leaderboards, allowing runners to track and compare their
                  performance in real time.
                </p>
              </div>
            </div>
      
            <p className="text-xs italic text-neutral-500 mb-4">
              Note: To show respect for the product, I will use its original
              Vietnamese name and image.
            </p>
      
            {/* Gallery */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Gallery
              </h2>
              <div>
                <a
                  href="https://chayvituonglaixanh.com.vn/"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden md:block"
                >
                  <img
                    src={ImageNAB}
                    alt="Online Running Tournament – Desktop"
                    loading="lazy"
                    className="w-full rounded-xl border border-black/[0.06] shadow-sm object-cover hover:shadow-md transition-shadow"
                  />
                </a>
                <a
                  href="https://chayvituonglaixanh.com.vn/"
                  target="_blank"
                  rel="noreferrer"
                  className="md:hidden block max-w-sm mx-auto"
                >
                  <img
                    src={ImageNABMobile}
                    alt="Online Running Tournament – Mobile"
                    loading="lazy"
                    className="w-full rounded-xl border border-black/[0.06] shadow-sm object-cover"
                  />
                </a>
              </div>
            </section>
    </>
  );
}
