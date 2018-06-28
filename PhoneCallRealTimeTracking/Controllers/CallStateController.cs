using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using PhoneCallRealTimeTracking.Hubs;
using PhoneCallRealTimeTracking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PhoneCallRealTimeTracking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CallStateController : ControllerBase
    {
        private readonly IHubContext<PhoneCallHub> _hubContext;

        public CallStateController(IHubContext<PhoneCallHub> hubContext)
        {
            this._hubContext = hubContext;
        }
        [Route("startcall/{callerConnectitonId}")]
        [HttpPost]
        public async Task<IActionResult> StartCallAsync(string callerConnectitonId)
        {
            // Do SomeStuff here
            // I assume that this part will be send to the caller so he/she will be able to track of the call, it can be sent to webhook or something
            await _hubContext.Clients.All.SendAsync("StartCall", callerConnectitonId);

            return Ok();
        }

        // Get the details from webhook
        [Route("change")]
        [HttpPost]
        public async Task<IActionResult> ChangeCallStateAsync(CallStateModel callState)
        {
            // Do Some stuff here

            await _hubContext.Clients.Client(callState.ConnectionId).SendAsync("ChangeCallState", callState.CallState);
            return Ok();

        }

    }
}
