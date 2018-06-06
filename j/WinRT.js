function activationHandler( e )
{
  if ( e.kind == ActivationKind.Protocol )
  {
    console.log(e);
  }
}

if ( 'ActivationEvent' in window )
{
    activationHandler(window.ActivationEvent);
}