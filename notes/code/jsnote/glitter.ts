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
    mark.deliverFakePackage(mark.trap);
  };
};

const scammer = async () => {
  const mule: any = {};
  const scammer: any = {
    callCustomer: () => {
      const amount = 13_000;
      return `Hello, this is Amazon.com, you have been charged $${amount} for your refund. Please call back in order to send payment.`;
    },
    demandRefund: () => {
      return `Yes, you must send some money back`;
    },
  };
  const supervisor: any = {};
  mule.rentAirbnb();
  mule.callCustomer();
  const promise = await mule.phone.called();
  mule.money = await promise;
  supervisor.money = mule.send(mule.money);
  scammer.money = supervisor.send(supervisor.money);
};
