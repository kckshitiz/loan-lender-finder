
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateLoan = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      const payment = principal / numberOfPayments;
      setMonthlyPayment(payment);
      setTotalInterest(0);
    } else {
      const payment = principal * 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      const totalPaid = payment * numberOfPayments;
      const interest = totalPaid - principal;
      
      setMonthlyPayment(payment);
      setTotalInterest(interest);
    }
  };

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calculator className="h-6 w-6 text-primary" />
          <span>Home Loan Calculator</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="loan-amount" className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span>Loan Amount</span>
              </Label>
              <Input
                id="loan-amount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="mt-2"
              />
              <Slider
                value={[loanAmount]}
                onValueChange={(value) => setLoanAmount(value[0])}
                max={2000000}
                min={100000}
                step={10000}
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>$100K</span>
                <span>$2M</span>
              </div>
            </div>

            <div>
              <Label htmlFor="interest-rate" className="flex items-center space-x-2">
                <Percent className="h-4 w-4" />
                <span>Interest Rate (%)</span>
              </Label>
              <Input
                id="interest-rate"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="mt-2"
              />
              <Slider
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                max={10}
                min={2}
                step={0.1}
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>2%</span>
                <span>10%</span>
              </div>
            </div>

            <div>
              <Label htmlFor="loan-term" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Loan Term (Years)</span>
              </Label>
              <Input
                id="loan-term"
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="mt-2"
              />
              <Slider
                value={[loanTerm]}
                onValueChange={(value) => setLoanTerm(value[0])}
                max={40}
                min={5}
                step={1}
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>5 years</span>
                <span>40 years</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-3">Your Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Payment:</span>
                  <span className="font-bold text-lg">
                    ${monthlyPayment.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Interest:</span>
                  <span className="font-bold">
                    ${totalInterest.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Amount:</span>
                  <span className="font-bold">
                    ${(loanAmount + totalInterest).toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <Button className="w-full" size="lg">
                Get Pre-Approval
              </Button>
              <Button variant="outline" className="w-full">
                Compare Rates
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;
