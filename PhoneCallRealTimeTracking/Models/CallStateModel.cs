using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PhoneCallRealTimeTracking.Models
{
    public class CallStateModel
    {
        public string ConnectionId { get; set; }
        public string CallState { get; set; }
        public DateTime CallTime { get; set; }
    }
}
