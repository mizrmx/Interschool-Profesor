const Login = () => {
  return (
    <div className="relative bg-color-background w-full h-[1182px] overflow-hidden text-center text-base text-darkslategray-100 font-heading-heading-3">
      <div className="absolute top-[0px] left-[0px] w-[960px] h-[1182px]">
        <img
          className="absolute top-[0px] left-[0px] w-[960px] h-[1182px] object-cover"
          alt=""
          src="/rectangle-506@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[960px] h-[1182px]" />
      </div>
      <div className="absolute top-[534px] left-[1161px] w-[545px] h-[412px]">
        <div className="absolute top-[356px] left-[0px] rounded-8xs bg-color-purple w-[545px] h-14 flex flex-col items-center justify-center text-lg text-color-white">
          <div className="flex flex-row items-center justify-center py-2.5 px-6">
            <div className="relative tracking-[0.1px] leading-[20px] font-medium">
              Login
            </div>
          </div>
        </div>
        <div className="absolute top-[84px] left-[0px] rounded-8xs box-border w-[536px] h-10 overflow-hidden text-silver-200 border-[1px] border-solid border-silver-100">
          <div className="absolute top-[10px] left-[50px]">admin</div>
          <img
            className="absolute top-[8px] left-[9px] w-6 h-6 overflow-hidden"
            alt=""
            src="/communication--mail.svg"
          />
        </div>
        <img
          className="absolute top-[204px] left-[0px] rounded-8xs w-[536px] h-10 overflow-hidden"
          alt=""
          src="/frame-5031.svg"
        />
        <div className="absolute top-[52px] left-[0px]">Usuario</div>
        <div className="absolute top-[172px] left-[0px]">Contraseña</div>
        <div className="absolute top-[252px] left-[31px] text-darkslategray-300">
          Recordar
        </div>
        <div className="absolute top-[255.5px] left-[-0.5px] box-border w-[17px] h-[17px] overflow-hidden border-[1px] border-solid border-mediumpurple" />
        <div className="absolute top-[0px] left-[0px] text-[32px] tracking-[0.1px] leading-[20px] font-medium text-gray-200">
          Login
        </div>
      </div>
      <div className="absolute top-[196px] left-[1176px] w-[536px] h-[204px] text-left text-5xl text-silver-200">
        <div className="absolute top-[168px] left-[0px]">
          Bienvenido al panel de control de profesores
        </div>
        <img
          className="absolute top-[0px] left-[194px] w-[149px] h-[123px] overflow-hidden"
          alt=""
          src="/interschoollogoazul-1.svg"
        />
      </div>
    </div>
  );
};

export default Login;
