﻿/*
    mocuobject.js

    The base object of which all others are derived.

    The MocuGame Library is © 2012-2013 Olutobi Akomolede and is made available under the Eclipse Public License

    Eclipse Public License, Version 1.0 (EPL-1.0) (plain text) THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.
	1. DEFINITIONS
	"Contribution" means:
	a) in the case of the initial Contributor, the initial code and documentation distributed under this Agreement, and b) in the case of each subsequent Contributor: i) changes to the Program, and ii) additions to the Program; where such changes and/or additions to the Program originate from and are distributed by that particular Contributor. A Contribution 'originates' from a Contributor if it was added to the Program by such Contributor itself or anyone acting on such Contributor's behalf. Contributions do not include additions to the Program which: (i) are separate modules of software distributed in conjunction with the Program under their own license agreement, and (ii) are not derivative works of the Program. "Contributor" means any person or entity that distributes the Program.
	"Licensed Patents " mean patent claims licensable by a Contributor which are necessarily infringed by the use or sale of its Contribution alone or when combined with the Program.
	"Program" means the Contributions distributed in accordance with this Agreement.
	"Recipient" means anyone who receives the Program under this Agreement, including all Contributors.
	2. GRANT OF RIGHTS
	a) Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, distribute and sublicense the Contribution of such Contributor, if any, and such derivative works, in source code and object code form. b) Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free patent license under Licensed Patents to make, use, sell, offer to sell, import and otherwise transfer the Contribution of such Contributor, if any, in source code and object code form. This patent license shall apply to the combination of the Contribution and the Program if, at the time the Contribution is added by the Contributor, such addition of the Contribution causes such combination to be covered by the Licensed Patents. The patent license shall not apply to any other combinations which include the Contribution. No hardware per se is licensed hereunder. c) Recipient understands that although each Contributor grants the licenses to its Contributions set forth herein, no assurances are provided by any Contributor that the Program does not infringe the patent or other intellectual property rights of any other entity. Each Contributor disclaims any liability to Recipient for claims brought by any other entity based on infringement of intellectual property rights or otherwise. As a condition to exercising the rights and licenses granted hereunder, each Recipient hereby assumes sole responsibility to secure any other intellectual property rights needed, if any. For example, if a third party patent license is required to allow Recipient to distribute the Program, it is Recipient's responsibility to acquire that license before distributing the Program. d) Each Contributor represents that to its knowledge it has sufficient copyright rights in its Contribution, if any, to grant the copyright license set forth in this Agreement. 3. REQUIREMENTS
	A Contributor may choose to distribute the Program in object code form under its own license agreement, provided that:
	a) it complies with the terms and conditions of this Agreement; and b) its license agreement: i) effectively disclaims on behalf of all Contributors all warranties and conditions, express and implied, including warranties or conditions of title and non-infringement, and implied warranties or conditions of merchantability and fitness for a particular purpose; ii) effectively excludes on behalf of all Contributors all liability for damages, including direct, indirect, special, incidental and consequential damages, such as lost profits; iii) states that any provisions which differ from this Agreement are offered by that Contributor alone and not by any other party; and iv) states that source code for the Program is available from such Contributor, and informs licensees how to obtain it in a reasonable manner on or through a medium customarily used for software exchange. When the Program is made available in source code form:
	a) it must be made available under this Agreement; and b) a copy of this Agreement must be included with each copy of the Program. Contributors may not remove or alter any copyright notices contained within the Program. Each Contributor must identify itself as the originator of its Contribution, if any, in a manner that reasonably allows subsequent Recipients to identify the originator of the Contribution.
	4. COMMERCIAL DISTRIBUTION
	Commercial distributors of software may accept certain responsibilities with respect to end users, business partners and the like. While this license is intended to facilitate the commercial use of the Program, the Contributor who includes the Program in a commercial product offering should do so in a manner which does not create potential liability for other Contributors. Therefore, if a Contributor includes the Program in a commercial product offering, such Contributor ("Commercial Contributor") hereby agrees to defend and indemnify every other Contributor ("Indemnified Contributor") against any losses, damages and costs (collectively "Losses") arising from claims, lawsuits and other legal actions brought by a third party against the Indemnified Contributor to the extent caused by the acts or omissions of such Commercial Contributor in connection with its distribution of the Program in a commercial product offering. The obligations in this section do not apply to any claims or Losses relating to any actual or alleged intellectual property infringement. In order to qualify, an Indemnified Contributor must: a) promptly notify the Commercial Contributor in writing of such claim, and b) allow the Commercial Contributor to control, and cooperate with the Commercial Contributor in, the defense and any related settlement negotiations. The Indemnified Contributor may participate in any such claim at its own expense.
	For example, a Contributor might include the Program in a commercial product offering, Product X. That Contributor is then a Commercial Contributor. If that Commercial Contributor then makes performance claims, or offers warranties related to Product X, those performance claims and warranties are such Commercial Contributor's responsibility alone. Under this section, the Commercial Contributor would have to defend claims against the other Contributors related to those performance claims and warranties, and if a court requires any other Contributor to pay any damages as a result, the Commercial Contributor must pay those damages.
	5. NO WARRANTY
	EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE PROGRAM IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Each Recipient is solely responsible for determining the appropriateness of using and distributing the Program and assumes all risks associated with its exercise of rights under this Agreement , including but not limited to the risks and costs of program errors, compliance with applicable laws, damage to or loss of data, programs or equipment, and unavailability or interruption of operations.
	6. DISCLAIMER OF LIABILITY
	EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, NEITHER RECIPIENT NOR ANY CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OR DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS GRANTED HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
	7. GENERAL
	If any provision of this Agreement is invalid or unenforceable under applicable law, it shall not affect the validity or enforceability of the remainder of the terms of this Agreement, and without further action by the parties hereto, such provision shall be reformed to the minimum extent necessary to make such provision valid and enforceable.
	If Recipient institutes patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Program itself (excluding combinations of the Program with other software or hardware) infringes such Recipient's patent(s), then such Recipient's rights granted under Section 2(b) shall terminate as of the date such litigation is filed.
	All Recipient's rights under this Agreement shall terminate if it fails to comply with any of the material terms or conditions of this Agreement and does not cure such failure in a reasonable period of time after becoming aware of such noncompliance. If all Recipient's rights under this Agreement terminate, Recipient agrees to cease use and distribution of the Program as soon as reasonably practicable. However, Recipient's obligations under this Agreement and any licenses granted by Recipient relating to the Program shall continue and survive.
	Everyone is permitted to copy and distribute copies of this Agreement, but in order to avoid inconsistency the Agreement is copyrighted and may only be modified in the following manner. The Agreement Steward reserves the right to publish new versions (including revisions) of this Agreement from time to time. No one other than the Agreement Steward has the right to modify this Agreement. The Eclipse Foundation is the initial Agreement Steward. The Eclipse Foundation may assign the responsibility to serve as the Agreement Steward to a suitable separate entity. Each new version of the Agreement will be given a distinguishing version number. The Program (including Contributions) may always be distributed subject to the version of the Agreement under which it was received. In addition, after a new version of the Agreement is published, Contributor may elect to distribute the Program (including its Contributions) under the new version. Except as expressly stated in Sections 2(a) and 2(b) above, Recipient receives no rights or licenses to the intellectual property of any Contributor under this Agreement, whether expressly, by implication, estoppel or otherwise. All rights in the Program not expressly granted under this Agreement are reserved.
	This Agreement is governed by the laws of the State of New York and the intellectual property laws of the United States of America. No party to this Agreement will bring a legal action under this Agreement more than one year after the cause of action arose. Each party waives its rights to a jury trial in any resulting litigation.

    Written by Olutobi Akomolede AKA Mocuto Oshi.
*/

(function () {

    /*
        MocuObject constructor. Initializes the object with its position, size, and other properties.

        Parameters:
        point (Point)
        - Position to create the object at.
        size (Point)
        - The dimensions of the object.
    */
    MocuGame.MocuObject = function (point, size) {
        point = (typeof point == 'undefined' || typeof point == null) ? new MocuGame.Point(0, 0) : point;
        size = (typeof size == 'undefined' || typeof size == null) ? new MocuGame.Point(0, 0) : size;
        this.name = "";

        this.x = point.x;
        this.y = point.y;

        this.velocity = new MocuGame.Point(0, 0);
        this.acceleration = new MocuGame.Point(0, 0);
        this.angularvelocity = 0;

        this.isMovementPolar = false;

        this.width = size.x;
        this.height = size.y;

        this.worldPoint = new MocuGame.Point(0, 0);

        this.exists = true;
        this.active = true;
        if (typeof this.visible == 'undefined' || typeof this.visible == 'null')
            this.visible = false;
        else
            this.visible = true;
        this.density = true;
        this.parent = null;
        this.timeline = new MocuGame.Timeline();
        this.scale = new MocuGame.Point(1, 1);
        this.dying = false;
        this.life = 0;
        this.fillStyle = 'blue';
        this.strokeStyle = 'black';
        this.lineWidth = 4;
        this.alpha = 1;
        this.usesFade = false;
        this.fade = new MocuGame.RGBA(1, 0, 0, 0);

        this.restitution = 0.0;

        this.cameraTraits = new MocuGame.MocuCameraTraits(new MocuGame.Point(1, 1), true, true);
    };

    /*
        update is a function which changes the MocuObject's properties based off its current state.

        Parameters:
        deltaT (Number)
        - Elapsed time since last update call.
    */

    MocuGame.MocuObject.prototype.update = function (deltaT) {
        if (typeof deltaT == 'undefined')
            deltaT = 0;
        if (this.isMovementPolar == true) {
            this.velocity.x += this.acceleration.x * Math.cos(MocuGame.deg2rad(this.acceleration.y)) * deltaT;
            this.velocity.y += this.acceleration.x * Math.sin(MocuGame.deg2rad(this.acceleration.y)) * deltaT;

            this.x += this.velocity.x * Math.cos(MocuGame.deg2rad(this.velocity.y)) * deltaT;
            this.y += this.velocity.x * Math.sin(MocuGame.deg2rad(this.velocity.y)) * deltaT;
        }
        else {
            this.velocity.x += this.acceleration.x * deltaT;
            this.velocity.y += this.acceleration.y * deltaT;

            this.x += this.velocity.x * deltaT;
            this.y += this.velocity.y * deltaT;
        }

        this.angle += this.angularvelocity * deltaT;

        if (this.parent != null) {
            this.worldPoint.x = this.parent.worldPoint.x + this.x;
            this.worldPoint.y = this.parent.worldPoint.y + this.y;
        }
        else {
            this.worldPoint.x = this.x;
            this.worldPoint.y = this.y;
        }
        this.timeline.update(deltaT);
        if (this.life > 0) {
            this.life -= deltaT;
            if (this.life == 0) {
                this.killAndRemove();
            }
        }
    };

    /*
        draw is a function which renders the bonding box of the MocuObject onto the canvas.
        Note: MocuObjects are invisible by defalt

        Parameters:
        Context (Object)
        - The canvas context on which the object will be drawn.
        Displacement (Point)
        - The offset of the object's rendering based off its parent.
    */

    MocuGame.MocuObject.prototype.draw = function (context, displacement) {
        context.globalAlpha = this.alpha;
        if (typeof displacement  == 'null' || typeof displacement == 'undefined')
            displacement = new MocuGame.Point(0, 0);
        context.beginPath();
        context.rect((this.x + displacement.x) * MocuGame.uniscale, (this.y + displacement.y) * MocuGame.uniscale, this.width * MocuGame.uniscale, this.height * MocuGame.uniscale);
        if (this.usesFade) {
            context.fillStyle = "rgb( " + Math.ceil(this.fade.r * 255) + ", " + Math.ceil(this.fade.g * 255) + ", " + Math.ceil(this.fade.b * 255) + ")";
            context.globalAlpha = this.fade.a;
        }
        else
            context.fillStyle = this.fillStyle;
        context.fill();
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.strokeStyle;
        context.stroke();
        context.closePath();
        context.globalCompositeOperation = "source-over";

    };

    /*
        getWorldPoint is a function which returns the objects position on the canvas.

        Returns:
        Point
        - The object's position on the canvas.
    */

    MocuGame.MocuObject.prototype.getWorldPoint = function () {
        return this.worldPoint;
    };

    /*
        getOverlapsInGroup is a function which returns all objects in a given MocuGroup that overlap
        with the caller.

        Parameters:
        group (MocuGroup)
        - The group to check collisions against.

        Returns:
        Array
        - List of all objects in group which collide with the caller.
    */

    MocuGame.MocuObject.prototype.getOverlapsInGroup = function (group) {
        var returnGroup = new Array();
        returnGroup.setParent = false;
        if (!MObj.exists) {
            return returnGroup;
        }
        //console.log(" X is " + MocuGame.MocuGroup.prototype.isPrototypeOf(MObj));
        if (MocuGame.MocuGroup.prototype.isPrototypeOf(MObj)) {
            for (var i = 0; i < group.objects.length; ++i) {
                var obj = group.objects[i];
                if (obj.exists) {
                    if (this.isColliding(obj)) //If it is a single object
                        returnGroup.push(obj);
                }
            }
        }
        return returnGroup;
    };

    /*
        overlapsWith is a function which tests whether a given object overlaps with the caller.
        Only returns true if the object overlaps with the caller, the object exists, and the object
        is dense.

        Parameters:
        object (MocuObject)
        -The object to test against the caller.

        Returns:
        Boolean - True if the object overlaps with the caller, false otherwise.

    */

    MocuGame.MocuObject.prototype.overlapsWith = function (object) {
        var pos1 = this.getWorldPoint();
        var pos2 = null;
        var objectWidth = null;
        var objectHeight = null;
        if (typeof object.getWorldPoint === "undefined") {
            pos2 = object
            objectWidth = 1
            objectHeight = 1
        } else {
            var pos2 = object.getWorldPoint();
            objectWidth = object.width
            objectHeight = object.height
        }
        if (object.exists == false) {
            return false;
        }
        if ((pos2.x > pos1.x + this.width - 1) ||
                           (pos2.y > pos1.y + this.height - 1) ||
                           (pos1.x > pos2.x + objectWidth - 1) ||
                           (pos1.y > pos2.y + objectHeight - 1))
        {
            // no collision
            return false;
        }

        return true;

    };

    /*
        collidesWith is a function which applies position readjusting to the caller if it overlaps
        with a given object.

        Parameter:
        object (MocuObject)
        - The object to collide against.

        Returns:
        Array - List of the collision types that occured with the given object and the caller.
    */

    MocuGame.MocuObject.prototype.collidesWith = function (object) {
        if (this.overlapsWith(object) == true && object.density && this.density) {
            var collisionTypes = this.getCollionTypes(object);
            if (collisionTypes.indexOf(MocuGame.RIGHT) != -1) {
                this.x = object.x - this.width;
                if (this.isMovementPolar) {
                }
                else {
                    this.velocity.x = Math.abs(this.velocity.x) * -this.restitution;
                }
            }
            if (collisionTypes.indexOf(MocuGame.LEFT) != -1) {
                this.x = object.getWorldPoint().x + object.width;
                if (this.isMovementPolar) {
                }
                else {
                    this.velocity.x = Math.abs(this.velocity.x) * this.restitution;
                }
            }
            if (collisionTypes.indexOf(MocuGame.TOP) != -1) {
                this.y = object.getWorldPoint().y + object.height;
                if (this.isMovementPolar) {
                }
                else {
                    this.velocity.y = Math.abs(this.velocity.y) * this.restitution;
                }
            }
            if (collisionTypes.indexOf(MocuGame.BOTTOM) != -1) {
                this.y = object.getWorldPoint().y - this.height;
                if (this.isMovementPolar) {
                }
                else {
                    this.velocity.y = Math.abs(this.velocity.y) * -this.restitution;
                }
            }
            return collisionTypes;
        }
        return new Array();
    };

    MocuGame.MocuObject.prototype.collidesWithTilemap = function (tilemap) {
        if (this.overlapsWith(tilemap)) {
            var tiles = tilemap.getDenseTilesInRange(this.getWorldPoint(), new MocuGame.Point(this.width + 1, this.height + 1));
            for (var i = 0; i < tiles.length; i++) {
                this.collidesWith(tiles[i]);
            }

        }
    };

    MocuGame.MocuObject.prototype.getCollionTypes = function (object) {
        //Check for right side, relative to caller

        var pos = this.getWorldPoint();
        var collisionTypes = new Array();

        var topRight = new MocuGame.Point((pos.x + this.width), pos.y);
        var bottomRight = new MocuGame.Point((pos.x + this.width), (pos.y + this.height));
        var topLeft = new MocuGame.Point(pos.x , pos.y);
        var bottomLeft = new MocuGame.Point(pos.x, (pos.y + this.height));

        if (object.containsLine(topRight, bottomRight)) {
            //If there is a rightward collision, see if there would be a collision if it had not been for the velocity
            //If so, then the collision is not caused by horizontal movement

            //This logic is applied in all following collision checks
            var newStartPoint = null;
            var newEndPoint = null;
            if (this.isMovementPolar) {
            }
            else {
                newStartPoint = new MocuGame.Point(topRight.x - this.velocity.x - 1, topRight.y);
                newEndPoint = new MocuGame.Point(bottomRight.x - this.velocity.x - 1, bottomRight.y);
            }

            if(!object.containsLine(newStartPoint, newEndPoint))
            {
	            collisionTypes.push(MocuGame.RIGHT);
            }
        }
        //Chceck for left side
        if (object.containsLine(topLeft, bottomLeft)) {
            var newStartPoint = null;
            var newEndPoint = null;
            if (this.isMovementPolar) {
            }
            else {
                newStartPoint = new MocuGame.Point(topLeft.x - this.velocity.x + 1, topLeft.y);
                newEndPoint = new MocuGame.Point(bottomLeft.x - this.velocity.x + 1, bottomLeft.y);
            }

        	if(!object.containsLine(newStartPoint, newEndPoint))
            {
            	collisionTypes.push(MocuGame.LEFT);
            }
        }
        //Chceck for ceiling side
        if (object.containsLine(topLeft, topRight)) {
            var newStartPoint = null;
            var newEndPoint = null;
            if (this.isMovementPolar) {
            }
            else {
                newStartPoint = new MocuGame.Point(topLeft.x, topLeft.y - this.velocity.y + 1);
                newEndPoint = new MocuGame.Point(topRight.x, topRight.y - this.velocity.y + 1);
            }

        	if(!object.containsLine(newStartPoint, newEndPoint))
            {
            	collisionTypes.push(MocuGame.TOP);
            }
        }
        //Chceck for floor side
        if (object.containsLine(bottomLeft, bottomRight)) {
            var newStartPoint = null;
            var newEndPoint = null;
            if (this.isMovementPolar) {
            }
            else {
                newStartPoint = new MocuGame.Point(bottomLeft.x, bottomLeft.y - this.velocity.y - 1);
                newEndPoint = new MocuGame.Point(bottomRight.x, bottomRight.y - this.velocity.y - 1);
            }

        	if(!object.containsLine(newStartPoint, newEndPoint))
            {
            	collisionTypes.push(MocuGame.BOTTOM);
            }
        }
        return collisionTypes;
    };

    /*
        containsPoint is a funtion which returns true if the given point is within the bounds of
        the MocuObject

        Parameters:
        point (Point)
        - The point to be tested.

        Returns:
        Boolean - Whether the point is within the bounds of the object.
    */

    MocuGame.MocuObject.prototype.containsPoint = function (point) {
        var pos = this.getWorldPoint();
        if (point.x < pos.x + this.width && point.x > pos.x
            && point.y < pos.y + this.height && point.y > pos.y)
            return true;
        return false;
    };

    /*
        containsLine is a function which checks whether a line segment formed by two points intersects a
        MocuObject

        Parameters:
        startPoint (Point)
        - The starting point of the line segment.
        endPoint (Point)
        - The ending point of the line segment.

        Returns:
        Boolean - Whether the line segment intersects the object.
    */

    MocuGame.MocuObject.prototype.containsLine = function (startPoint, endPoint) {
        //Check to see if there is horizontal overlap
        var pos = this.getWorldPoint();
        if((startPoint.x > (pos.x + this.width)) && (endPoint.x > (pos.x + this.width)) ||
            ((startPoint.x < pos.x) && (endPoint.x < pos.x)))
        {
            return false;
        }
        //Check to see if there is vertical overlap
        else if ((startPoint.y > (pos.y + this.height)) && (endPoint.y > (pos.y + this.height)) ||
            ((startPoint.y < pos.y) && (endPoint.y < pos.y))) {
            return false;
        }
        else {
            return true;
        }
    };

    /*
        kill is a function which sets the MocuObject to no longer exist
    */
    MocuGame.MocuObject.prototype.kill = function () {
        this.exists = false;
    };

    /*
        killAndRemove is a function which sets the MocuObject to no longer exist, then removes it from its parent.
    */

    MocuGame.MocuObject.prototype.killAndRemove = function () {
        this.kill();
        this.exists = false;
        if (this.parent != null) {
            this.parent.remove(this);
        }
    };
})();