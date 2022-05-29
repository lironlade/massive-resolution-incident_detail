export function initServerUrl()  {
    
    var host = window.location.hostname;

    switch (host.toLowerCase()) {
      case "localhost":
        return "http://crm-dev13";

      case "crmtest16":
      case "crmdev16":
      case "crmtest01":
      case "crmdev01":
      case "crmdev02":
      case "crmdev03":
      case "crmdev04":
      case "crmdev05":
      case "crm-dev01":
      case "crm-dev02":
      case "crm-dev03":
      case "crm-dev04":
      case "crm-dev05":
      case "crm-dev06":
      case "crm-dev08":
      case "crm-dev11":
      case "crm-dev13":
        return "http://" + host;

      case "crmtlvlb":
      case "crmfront01":
      case "crmfront02":
      case "crmfront03":
        return "http://crmtlvlb";

      case "crmprodnlb":
      case "dgt-crmfront01":
      case "dgt-crmfront02":
      case "crmprod01":
        return "http://dgt-crmback01";

      case "dgtcrmftppr01":
        return "http://dgtcrmbppr01";

      case "dgtcrmftest01":
        return "http://dgtcrmbtest01";

      case "crmtestlb":
      case "crmtestfront01":
      case "crmtestfront02":
        return "http://crmtestback01";

      case "crmpprfront01":
      case "crmpprfront02":
      case "crmpprlb":
        return "http://crmpprback01";

      case "dgtcrmpprlb":
      case "dgtcrm16pprft01":
      case "dgtcrm16pprft02":
        return "http://dgtcrmpprlb";

      case "dgtcrmtstlb":
      case "dgtcrm16tstft01":
      case "dgtcrm16tstft02":
        return "http://dgtcrmtstlb";

      case "dr-crmfront01":
        return "http://dr-crmback01";
    }
  };

  export function getUrlVars() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("data");
  }