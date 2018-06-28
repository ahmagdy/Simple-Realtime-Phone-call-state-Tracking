using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PhoneCallRealTimeTracking.Hubs
{
    public class PhoneCallHub : Hub
    {

        public async Task StartCall(string connectionId, string something)
        {
            // Do Something
            await Clients.Client(connectionId).SendAsync("ChangeCallState","Start");
        }

        public async Task ChangeCallState( string text)
        {
            var connectionId = Context.ConnectionId;
            await Clients.Client(connectionId).SendAsync(text);
        }

        public string GetConnectionId()
        {
            return Context.ConnectionId;
        }


    }
}
