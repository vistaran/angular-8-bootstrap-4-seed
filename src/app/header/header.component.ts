import { Component, OnInit } from '@angular/core';
import {User} from '../shared/objects/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit() {
    this.user = new User({
      id: '1',
      name: 'Christopher Kolodziejczyk',
      email: 'chris@techdevsolutions.com',
      photoBase64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAA0NDQ0ODQ4QEA4UFhMWFB4bGRkbHi0gIiAiIC1EKj' +
        'IqKjIqRDxJOzc7STxsVUtLVWx9aWNpfZeHh5e+tb75+f8BDQ0NDQ4NDhAQDhQWExYUHhsZGRseLSAiICIgLUQqMioqMipEPEk7NztJPGxVS0tV' +
        'bH1pY2l9l4eHl761vvn5///AABEIAIAAgAMBIgACEQEDEQH/xAB0AAABBQEBAAAAAAAAAAAAAAADAQIEBQYABxAAAwACAQQABgEFAQAAAAAAAA' +
        'ECAxEEBRIhMRMUIkFRYXEjJDJCkWIBAAMBAQAAAAAAAAAAAAAAAAABAgMEEQEBAQEBAAMBAQAAAAAAAAAAARECIQMSQTEi/9oADAMBAAIRAxEA' +
        'PwD0wQURjZEGMcwdPRUAd2pTbekZ/mdW7dzi/wCndS5TpuJfgzOXJ72w+y5yPm5ua23VtkR5634bIt2Bdh9jxa4+fmxvc5KLXjdatNLL5RlO8f' +
        'N6HKWPS8WeMsqopNBkzD9O5tYsi8/S/aNnFqkmmVqcH2cNOAHCjRQCwEZwjMgayLyLU46bJLK7m2pxsdviuZ7GW52XyzP5rLDlZN0yptkRtZoV' +
        'Uxmzmxg9GH9w/YDY9MJU2JWO2mjcdJz/ABeMk35l6MDLNR0LNrJcflGkqLGuQoyWPDU4UUQ4ejFiNYo1mejDWUvU60pRcMourvWNUKr5/sZHl9' +
        'qrwyqsl5q23tkGmS3k0OmDbFqgLoComxyYJP8AY8Ejyy36XmWPlYm3pbKWSRj8MqVNj0zDljJKqKTQdGc6Jk3GSTQpj1OCCjNnbHoxP7hNlBPX' +
        'OO9d0tEvB1Hj8htRT2lvTMy8WLZn+uP+2l/+idXUuIm080lX1PPh5HFr4dqu2lvQaqf1hszrbaIypv2Tc0+WRnKSbBpJUW2DSDMZoATSHoQVAM' +
        'EQdNrRHQaQgavoNPeX+EadUZXpeWMHGy5r8Js7J1qu/wChakf6i41ncd3GXxdb+h987r7BJ63H3xh6Wxnvif8AR0Zrl7TJq6bb/wB0Enpjb82D' +
        'PKq6y1+Toz0q9+H7LF9Le39Z09K37sWxU8sVOantket9pN5WF4rqSC9ol1TMR6TGLex9+XsYNNzThRExQgpQsVqpBIehoTsnKy5EpqvC9SvCRH' +
        'eydh4SyY1kV+WI+DX5BnUL19xyZMXBrR3yVDJq1I9JDRUxBzSERzE2IKjqeHesiX6Zncir7G0yzNy0/TMvycTx25Ym3F2YqH3fhCfUSa0CY12G' +
        'pHHHDibSj59gw+LHVvSKk1Fq56dkn6oqtLWy64ny2W3GRPb/AMWmUWKFC0ibjbRtPiY3v1aZsODGtTVd2/TIvaiS/wCrjnJ52vFAjPrnFS6k7O' +
        '2C2J3GZC7O2C2hdgDm0VXPwO57p9osW0Ma36BUrJ3BHcmi5fy9JKMa2vdfkrqwS1tCbT1V6EJbxpBsXG3p0vBfMtR1/lGw4Hb/AEWcQoSSQ9Sl' +
        '4SHqTo55xh1dOhEqEClEiZNZGdqTgUt6daRKycTJjhZPFQ/umRollvw5V7xVvtpGXyc/q+Kpk/0cm0C2/wAibZyrG7hdsD/LCTpjAyWyTi4OTP' +
        'F0lqUnthuDxfmMin7fdmo+DCxfDS1OtDOPP8nT9e2Qc3GteIWjaZ+Go8Ot7KTPjUthI13zxnZ473u/LD6JNryM7TfjGPQKkKpF8el5DRJrGVJE' +
        'EqIEmSTElJPx496Wi/4fF7NU15A8DBt9zXgu9JGHyd/jXnn9f//Z',
      createdDate: new Date(),
      createdUser: 'SYSTEM',
      updatedDate: new Date(),
      updatedUser: 'SYSTEM'
    });
  }

}
