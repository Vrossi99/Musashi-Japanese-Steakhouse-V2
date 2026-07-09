import { useState, useEffect } from 'react';

type Status = 'open' | 'closed';

interface BusinessHoursState {
  status: Status;
  text: string;
}

/**
 * Restaurant hours (America/Los_Angeles):
 *   Mon–Thu  5 PM – 12 AM  (closes AT midnight; no post-midnight window)
 *   Fri      5 PM –  1 AM  (carryover into Sat 12:00–12:59 AM)
 *   Sat      5 PM –  1 AM  (carryover into Sun 12:00–12:59 AM)
 *   Sun      5 PM –  1 AM  (carryover into Mon 12:00–12:59 AM)
 *
 * JS getDay(): 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
 */
export function useBusinessHours(): BusinessHoursState {
  const [state, setState] = useState<BusinessHoursState>({ status: 'closed', text: '' });

  useEffect(() => {
    function updateStatus() {
      const now = new Date();
      const laTimeString = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
      const laTime = new Date(laTimeString);

      const day = laTime.getDay();
      const hours = laTime.getHours();

      let isOpen = false;
      let closingText = '';

      // Mon–Thu evening (17:00–23:59): closes exactly at midnight — no post-midnight carryover
      if (day >= 1 && day <= 4 && hours >= 17) {
        isOpen = true;
        closingText = '12 AM';
      }

      // Fri evening (17:00–23:59): extends to 1 AM Saturday
      if (day === 5 && hours >= 17) {
        isOpen = true;
        closingText = '1 AM';
      }

      // Sat 12:00–12:59 AM: carryover from Friday night
      if (day === 6 && hours < 1) {
        isOpen = true;
        closingText = '1 AM';
      }

      // Sat evening (17:00–23:59): extends to 1 AM Sunday
      if (day === 6 && hours >= 17) {
        isOpen = true;
        closingText = '1 AM';
      }

      // Sun 12:00–12:59 AM: carryover from Saturday night
      if (day === 0 && hours < 1) {
        isOpen = true;
        closingText = '1 AM';
      }

      // Sun evening (17:00–23:59): extends to 1 AM Monday
      if (day === 0 && hours >= 17) {
        isOpen = true;
        closingText = '1 AM';
      }

      // Mon 12:00–12:59 AM: carryover from Sunday night
      if (day === 1 && hours < 1) {
        isOpen = true;
        closingText = '1 AM';
      }

      if (isOpen) {
        setState({ status: 'open', text: `Open now · till ${closingText}` });
      } else {
        setState({ status: 'closed', text: 'Opens at 5 PM' });
      }
    }

    updateStatus();
    const interval = setInterval(updateStatus, 60_000);
    return () => clearInterval(interval);
  }, []);

  return state;
}
