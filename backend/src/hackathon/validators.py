
from marshmallow import ValidationError

def data_required(string: str) -> None:
    """Checks whether the data is required.

    Args:
    -----
        string (str): The string.
    
    Raises:
    -------

    """
    if string.strip() == "":
        raise ValidationError()