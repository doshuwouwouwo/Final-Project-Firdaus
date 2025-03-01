import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css"

export default function Services() {
  AOS.init();
  return (
    <div className="container py-28 bg-[#1a1e29]">
      <div className="flex flex-col items-center justify-center w-full text-white py-8">
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-xl p-4">My Services</h1>
        <h1 data-aos="fade-up" data-aos-delay="200" className="text-[4rem] p-6 ">My Expertise Area</h1>
        <div data-aos="fade-up" data-aos-delay="200" className="text-[#b4b4b6] px-96 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde vitae et porro alias obcaecati tenetur sint nulla maiores at.</div>
      </div>
      <div className="grid grid-cols-3 gap-4 items-center text-white" data>
        <div className="p-8 border-2 border-gray-600" data-aos="fade-up" data-aos-delay="300">
          <div className="pb-4">
            <div className="bg-[#292f3c] p-4 w-20 h-20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.511 17.55c.009.131.262.095.271.007v-.316c0-.11-.253-.117-.262.008a2 2 0 0 0-.009.301m.131 1.05c.614-.008.921-.874.825-1.612a1.34 1.34 0 0 0-.715-.155a2 2 0 0 0-.016.265s.152 0 .145.093v.424c0 .105-.155.08-.155.08s.021.378.011.506c.092.065-.241.082-.159 0l-.008-.5s-.149.01-.158-.046s0-.435 0-.435c.009-.065 0-.106.13-.106a3 3 0 0 1 .018-.279a1.3 1.3 0 0 0-.654.187c-.176.716.122 1.578.736 1.578m1.165-.757a.87.87 0 0 0-.243-.8a6 6 0 0 1 .021.656c-.01.336-.337 1.1-.939 1.1s-.928-.742-.907-1.1a2 2 0 0 1 .053-.638c-.2.138-.253.62-.232.758a6 6 0 0 1-.169 1.5c.285-.207.243-.189.412-.517c.137-.267.168.25.812.242s.728-.509.854-.268a.78.78 0 0 0 .517.526c.021-.302-.295-.683-.179-1.459m-.418 1.057c-.02 0-.043.019-.078.063a.99.99 0 0 1-1.361 0c-.19-.181-.084.3-.559.579a1.247 1.247 0 0 0 1.3 1.133c.623.054 1.372-.59 1.3-1.16c-.52-.183-.508-.615-.602-.615m-.7 1.258a.269.269 0 1 1 .011-.534a.27.27 0 1 1-.012.538zm-15.85-2.912l-.234 1.624h9.96l-.186-1.624zm11.782 0h-2.028l.229 1.624h2.204zm.398-.946H3.514a.586.586 0 0 0-.572.461l-.65 2.963v.763h15v-.763l-.7-2.972a.585.585 0 0 0-.573-.452m.1 2.914H3.536a.35.35 0 0 1-.344-.424l.335-1.59a.35.35 0 0 1 .344-.28h11.876a.35.35 0 0 1 .343.273l.368 1.591a.352.352 0 0 1-.343.43zm4.853-14.659a.7.7 0 0 0-.7-.7l-4.806.015a.76.76 0 0 0-.714-.514l-11 .036a.756.756 0 0 0-.752.76l.026 8.434a.756.756 0 0 0 .759.754h3.762l-.194 1.285h-.53a.406.406 0 0 0 0 .81l4.919-.015a.406.406 0 0 0 0-.811h-.536L11 13.326h2.752v1.431a.7.7 0 0 0 .7.7l5.844-.019a.7.7 0 0 0 .7-.7zM3.807 4.206l10.9-.035l.019 6.218l-10.9.032zm4.358 10.412l.193-1.291h1.817l.2 1.285zm-4.333-2.086v-1.308l10.9-.033V12.5Zm12.1 2.112H14.48v-1.329h.3a.756.756 0 0 0 .754-.757v-2.544l.41.414zm2.343 0h-1.583v-4.523l-1.156-1.164l-.02.018L15.5 4.63l4.72-.022v3.569l-1.946 2.056zm1.951-.016l-1.2.016v-4.111l1.2-1.26zM9.281 11.5l-.009-.009a.395.395 0 1 0 .395.395a.386.386 0 0 0-.386-.386"
                ></path>
              </svg>
            </div>
          </div>
          <h1 className="text-[#b4b4b6] py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, vitae!</h1>
          <p className="text-[22px]">Website Design</p>
        </div>
        <div className="p-8 border-2 border-gray-600" data-aos="fade-up" data-aos-delay="400">
          <div className="pb-4">
            <div className="bg-[#292f3c] p-4 w-20 h-20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="M4.704 2.71a.5.5 0 0 0-.731-.626l-.002.001l-.003.002l-.009.006l-.03.02l-.102.075a6 6 0 0 0-.33.269c-.252.22-.577.547-.808.937a4.7 4.7 0 0 0-.482 1.032C2.087 4.785 2 5.174 2 5.5c0 .853.316 1.58.809 2.026l-.064.074c-.28.344-.443.79-.545 1.23c-.2.87-.2 1.916-.2 2.645v.025c0 2.787.379 4.368.796 5.272c.21.455.433.745.626.927c.097.092.185.155.258.198a1 1 0 0 0 .133.067S3.926 18 4 18s.187-.036.187-.036a1 1 0 0 0 .133-.067a1.5 1.5 0 0 0 .258-.198c.193-.183.416-.472.626-.927c.417-.904.796-2.485.796-5.272v-.025c0-.73 0-1.775-.2-2.645c-.102-.44-.265-.886-.545-1.23l-.064-.074C5.684 7.08 6 6.353 6 5.5c0-.697-.141-1.176-.396-1.559a2.8 2.8 0 0 0-.39-.453l-.17-.16c-.061-.057-.117-.109-.19-.182c-.15-.15-.167-.27-.167-.333a.3.3 0 0 1 .017-.103M5 5.5c0 1.07-.614 1.499-.998 1.5H4c-.385 0-1-.428-1-1.5c0-.173.052-.447.156-.757a3.7 3.7 0 0 1 .389-.833c.087-.147.2-.29.322-.421q.102.184.28.365c.073.073.168.161.249.237l.124.116c.105.102.186.191.251.29c.12.179.229.45.229 1.003M3.175 9.055c.086-.374.204-.65.345-.823A.57.57 0 0 1 3.998 8H4c.21 0 .354.078.48.232c.141.173.26.449.345.823c.173.748.175 1.688.175 2.445c0 2.713-.371 4.132-.704 4.853c-.11.237-.213.395-.296.5a2.4 2.4 0 0 1-.296-.5C3.371 15.632 3 14.213 3 11.5c0-.757.002-1.697.175-2.445M9 13c-.715 0-1.396-.15-2.01-.42q.02-.534.02-1.11A4 4 0 0 0 9 12v-2a2 2 0 0 1 2-2h2a4 4 0 0 0-6.082-3.416a3.3 3.3 0 0 0-.338-.96A5 5 0 0 1 14 8h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm4.9-4a5.01 5.01 0 0 1-3.9 3.9V15a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-1.026 0H11a1 1 0 0 0-1 1v1.874A4.01 4.01 0 0 0 12.874 9"
                ></path>
              </svg>
            </div>
          </div>
          <h1 className="text-[#b4b4b6] py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, veniam.</h1>
          <p className="text-[22px]">UI/UX Design</p>
        </div>
        <div className="p-8 border-2 border-gray-600" data-aos="fade-up" data-aos-delay="500">
          <div className="pb-4">
            <div className="bg-[#292f3c] p-4 w-20 h-20 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50"><g fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="#fff" strokeWidth={3} d="M24.896 35.417h.208"></path><path stroke="#fff" strokeWidth={2} d="M29.167 6.25h-8.334l1.042 4.167h6.25z"></path><path stroke="#fff" strokeWidth={2} d="M35.417 6.25H14.583c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h20.834c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></path></g></svg>
            </div>
          </div>
          <h1 className="text-[#b4b4b6] py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, natus.</h1>
          <p className="text-[22px]">App Design</p>
        </div>
        <div className="p-8 border-2 border-gray-600" data-aos="fade-up" data-aos-delay="600">
          <div className="pb-4">
            <div className="bg-[#292f3c] p-4 w-20 h-20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 100 100"><path fill="currentColor" fillRule="evenodd" d="M27.832 0a7.92 7.92 0 0 0-4.889 1.705L7.48 13.922a7.9 7.9 0 0 0-2.443 9.115l7.281 18.31a7.9 7.9 0 0 0 5.301 4.715l57.319 15.362a7.903 7.903 0 0 0 9.675-5.592l8.18-30.53a7.9 7.9 0 0 0-5.588-9.675L29.887.267A8 8 0 0 0 27.832 0m31.643 15.049c-1.082.633-2.128 1.478-3.104 2.494a22 22 0 0 0-2.576 3.299l-4.928-1.319a17.07 17.07 0 0 1 10.608-4.474m4.351.635l-1.96 7.322l-6.136-1.645a19.4 19.4 0 0 1 2.008-2.504c2.032-2.116 4.163-3.21 6.088-3.173m1.852.416c1.84.845 3.258 2.93 4.004 5.957c.24.975.401 2.04.486 3.172l-6.47-1.733zm-47.416.074a5.532 5.532 0 1 1 .076 11.06a5.532 5.532 0 0 1-.076-11.06m51.94 1.93a17.1 17.1 0 0 1 6.491 8.875l-4.591-1.231a22 22 0 0 0-.58-4.144c-.316-1.28-.757-2.461-1.32-3.5m-22.833 2.978l5.422 1.455a31.4 31.4 0 0 0-2.437 5.875l-6.15-1.65a17 17 0 0 1 3.165-5.68m7.313 1.959l6.691 1.793l-1.63 6.092l-7.556-2.024c.66-2.152 1.513-4.131 2.495-5.861m8.523 2.285l7.031 1.883c-.014 1.989-.264 4.128-.77 6.322l-7.894-2.115zm8.92 2.39l5.086 1.362c.376 2.1.363 4.303-.1 6.504L71.3 34.023c.505-2.169.774-4.294.826-6.306m-28.412.876l6.139 1.646a32 32 0 0 0-.903 6.287l-5.334-1.43c-.376-2.1-.365-4.302.098-6.503m7.97 2.137l7.567 2.029l-1.633 6.09l-6.781-1.817a29.7 29.7 0 0 1 .848-6.302m9.401 2.519l7.906 2.117a29.7 29.7 0 0 1-2.418 5.881l-7.12-1.906zm9.73 2.607l5.807 1.555a17 17 0 0 1-3.164 5.68l-5.002-1.338a32 32 0 0 0 2.36-5.897m-26.683 1.34l4.81 1.29c.054 1.617.258 3.147.602 4.544c.27 1.098.635 2.12 1.088 3.045a17.08 17.08 0 0 1-6.5-8.879M50.869 39l6.26 1.678l-2.041 7.617q-.166-.056-.33-.115c-1.534-1-2.717-2.935-3.375-5.606A19.7 19.7 0 0 1 50.869 39m8.092 2.168l6.598 1.77a19.7 19.7 0 0 1-2.233 2.837c-1.866 1.944-3.814 3.026-5.611 3.163a17 17 0 0 1-.797-.15zm8.523 2.285l4.475 1.197a17.1 17.1 0 0 1-9.508 4.38a15.5 15.5 0 0 0 2.242-1.94c.997-1.038 1.937-2.263 2.791-3.637m-46.55 12.218l34.862 41.786c2.281 2.938 6.788 3.408 9.625 1.003c8.22-6.853 16.463-13.685 24.666-20.567l.016-.014l.015-.015c2.725-2.478 2.854-6.93.33-9.591l-.038-.041l-.046-.04a1.34 1.34 0 0 0-.881-.304a1.3 1.3 0 0 0-.755.304c-.313.26-.407.474-.514.666s-.19.369-.257.488c-.066.119-.145.176-.018.07l.037-.03c-.287.22-.562.582-.631.994c-.07.41.05.743.15.956c.199.424.331.628.306.536l.016.058l.023.057c.4.992.076 2.354-.775 2.888l-.066.042l-.057.049c-7.956 6.798-16.073 13.43-24.107 20.17c-1 .79-2.688.827-3.503-.076C50.858 84.97 42.434 74.835 34 64.706Z" color="currentColor"></path><path fill="currentColor" fillRule="evenodd" d="m92.114 41.972l-1.254 4.71l.175.354c.396.803.333 1.859-.2 2.468l-.053.06l-.041.066C85.272 58.189 79.74 66.718 74.3 75.31l-.02.034l-.02.037c-.328.622-.859 1.21-1.44 1.562c-.58.353-1.17.485-1.792.333h-.006l-.004-.002c-.76-.176-1.581-.96-2.784-1.622c-12.061-7.708-24.086-15.479-36.122-23.237c-5.12-1.524-10.434-3.106-15.078-4.557l51.13 32.781l.017.01l.016.011c3.139 1.85 7.391.715 9.21-2.434l-.025.043c5.752-8.956 11.559-17.885 17.284-26.87l.018-.026l.015-.029c1.476-2.658.914-6.105-1.303-8.173z" color="currentColor"></path></svg>
            </div>
          </div>
          <h1 className="text-[#b4b4b6] py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, vitae!</h1>
          <p className="text-[22px]">Branding Design</p>
        </div>
        <div className="p-8 border-2 border-gray-600" data-aos="fade-up" data-aos-delay="700">
          <div className="pb-4">
            <div className="bg-[#292f3c] p-4 w-20 h-20 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512"><path fill="currentColor" d="M429.5 30.83h-.8c-2.2.15-3.4.65-4.6 1.89L396.5 60.3l55.2 55.2l27.5-27.63c1.3-1.23 1.8-2.36 1.9-4.57c.2-2.21-.3-5.43-1.8-9.16c-2.8-7.46-9.2-16.67-17-24.45s-17-14.18-24.5-17.05c-3.2-1.26-6.1-1.81-8.3-1.83zm-320.6.32L31.15 108.9l9.91 9.9l27.56-27.55L81.36 104l-27.53 27.6l21.16 21.1l27.51-27.5l12.8 12.8l-27.55 27.5l21.15 21.1l50.2-50.1l12.8 12.8l-50.2 50.1l21.2 21.2l27.5-27.6l12.8 12.8l-27.5 27.6l21.1 21.1l27.5-27.5l12.8 12.8l-27.5 27.5l21.1 21.2l50.2-50.2l12.8 12.8l-50.2 50.2l21.2 21.1l27.5-27.5l12.8 12.8l-27.5 27.5l21.1 21.2l27.6-27.6l12.8 12.8l-27.6 27.6l21.1 21.1l50.2-50.2l12.8 12.8l-50.2 50.2l21.2 21.1l27.5-27.5l12.8 12.8l-27.5 27.5l21.1 21.2l27.6-27.6l12.8 12.8l-27.6 27.6l9.9 9.9l77.8-77.8zm274.9 41.89l-9.9 9.91l9.9 9.9l12.7 12.75l9.9 9.9l12.7 12.7l9.9 9.9l9.9-9.9zm-22.6 22.63L280 176.8l9.9 9.9l81.2-81.1zm22.6 22.63l-81.1 81.2l9.9 9.8l81.1-81.1zm22.6 22.6l-81.1 81.2l9.9 9.9l81.1-81.2zM176.8 280L72.68 384.2l9.9 9.9L186.7 289.9zm22.6 22.7L95.31 406.8l9.89 9.9l104.1-104.1zm22.7 22.6L117.9 429.4l9.9 9.9L232 335.2zM63.24 400.2l-12.12 30.3l30.4 30.4l30.28-12.1l-6.6-6.6l-12.72-12.8l-9.9-9.9l-12.73-12.7zm-19.39 48.5l-13 32.5l32.48-13z"></path></svg>
            </div>
          </div>
          <h1 className="text-[#b4b4b6] py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, vitae!</h1>
          <p className="text-[22px]">Graphic Design</p>
        </div>
        <div className="p-9 border-2 border-gray-600" data-aos="fade-up" data-aos-delay="800">
          <h1 className="text-sm opacity-50 pb-[12px]">FURTHER REQUEST</h1>
          <p className="text-xl font-bold pb-8">I really enjoy learning new things, Contact Me For Colaboration</p>
          <div className="">
            <Link className="bg-[#4b7dca] p-4 w-20 h-20 rounded-full flex items-center justify-center hover:outline outline-1 outline-white ease-in duration-300 hover:bg-transparent" to="/contact">
            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6m0 0H9m9 0v9"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
