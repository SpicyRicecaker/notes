// deno-lint-ignore-file
const glitterBombTrap = () => {
  // Defensive/recon strategy
  const mark: any = {
    findAddress: () => {
      mark.lookAtLabel();
    },
  };
  () => {
    const customer = mark.backtraceScammerComputer();
    customer.cancelPackage = () => {
      // Cancel via fedex
      customer.cancelFedex();
      // Speak to delivery manager if needed
      customer.speakToManager();
    };
    // Find the address at which the package of money would be sent to
    mark.findAddress(customer.money);
    customer.cancelMoney(customer.money);
    customer.returnMoney(customer.money);
  };
  () => {
    // Make sure to add recording to package
    mark.initTrap();
    mark.deliverFakePackage(mark.trap);
    mark.deliverEvidenceToAuthorities();
  };
};

const scammer = async () => {
  // Multiple scammers are connected to one supervisor, connected to multiple mules
  // Need some way to connect all mules
  const mule: any = {};
  const scammer: any = {
    callCustomer: () => {
      const amount = 13_000;
      return `Hello, this is Amazon.com, you have been charged $${amount} for your refund. Please call back in order to send payment.`;
    },
    demandRefund: () => {
      return `Yes, you must send some money back`;
    },

    scam: async (customer: any) => {
      scammer.buildEmpathy();
      scammer.forceMistake();
      const money = await customer.mistake();
      return money;
    },
  };
  const supervisor: any = {};
  mule.rentAirbnb();
  scammer.callCustomer();
  scammer.emailCustomer();
  const customer = await scammer.phone.called();
  mule.money = await scammer.scam(customer);
  supervisor.money = mule.send(mule.money);
  scammer.money = supervisor.send(supervisor.money);
};
