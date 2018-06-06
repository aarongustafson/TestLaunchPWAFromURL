function activationHandler( e )
{
	output.innerHTML += 'Activated\r\n';
  if ( e.kind == ActivationKind.Protocol )
  {
    console.log(e);
  }
}

if ( 'ActivationEvent' in window )
{
    activationHandler(window.ActivationEvent);
}